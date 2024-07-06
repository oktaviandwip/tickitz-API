require("dotenv").config();
const nodemailer = require("nodemailer");
const models = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const hashing = require("../utils/hash");
const response = require("../utils/response");
const { google } = require("googleapis");

// Generate Token for Login
const genToken = (role, id) => {
  const payload = {
    role,
    id,
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "14d" });
  return token;
};

// Generate PIN
const genPin = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Generate Token PIN
const genTokenPin = (id, pin) => {
  const payload = {
    id,
    pin,
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "10m" });
  return token;
};

// Send PIN to Email
const sendPinToEmail = (email, pin) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "oktavian.dwiputra@gmail.com",
    to: email,
    subject: "Secure Your Account: Password Reset PIN Code",
    text: pin,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return response(res, 500, error.message);
    }
  });
};

// Create Redirect URL to Google Login
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.CALLBACK_URL}/auth/google/callback`
);

const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
];

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
  include_granted_scopes: true,
});

const controller = {
  // Login
  login: async (req, res) => {
    try {
      const result = await models.getPassByEmail(req.body.email);
      if (result.rowCount === 0) {
        return response(res, 401, "Email not found!");
      }

      const { role, id } = result.rows[0];
      const password = result.rows[0].password;
      const passwordUser = req.body.password;

      if (!password && !passwordUser) {
        const tokenJwt = genToken(role, id);
        return response(res, 200, {
          message: "Login succesful!",
          token: tokenJwt,
          profile: result.rows[0],
        });
      }

      if (!password) {
        return response(res, 401, "Please use GOOGLE to login!");
      }

      if (!passwordUser) {
        return response(res, 401, "Please use FORM to login!");
      }

      let check;
      if (role === "admin") {
        if (password === passwordUser) {
          check = true;
        } else {
          return response(res, 401, "Incorrect password!");
        }
      } else {
        check = await bcrypt.compare(passwordUser, password);
      }

      if (check) {
        const tokenJwt = genToken(role, id);
        return response(res, 200, {
          message: "Login succesful!",
          token: tokenJwt,
          profile: result.rows[0],
        });
      } else {
        return response(res, 401, "Incorrect password!");
      }
    } catch (error) {
      return response(res, 500, error.message);
    }
  },

  // Google Login
  googleLogin: async (req, res) => {
    return response(res, 200, authorizationUrl);
  },

  // Google Callback Login
  googleCallbackLogin: async (req, res) => {
    try {
      const { code } = req.query;

      const { tokens } = await oauth2Client.getToken(code);

      oauth2Client.setCredentials(tokens);

      const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: "v2",
      });

      const { data } = await oauth2.userinfo.get();

      if (!data.email || !data.name) {
        return response(res, 500, { data });
      }

      // Send Data from Google to Login in FE
      const queryParams = new URLSearchParams(data).toString();
      const redirectUrl = `${process.env.REDIRECT_URL}/auth/google/callback?${queryParams}`;
      res.redirect(redirectUrl);
    } catch (error) {
      return response(res, 500, error.message);
    }
  },

  // Reset Password
  resetPassword: async (req, res) => {
    try {
      if (!req.body.pin) {
        const result = await models.getPassByEmail(req.body.email);
        if (result.rowCount === 0) {
          return response(res, 401, "Email not found!");
        }

        const pin = genPin();
        const { id } = result.rows[0];

        sendPinToEmail(req.body.email, pin);
        const tokenPin = genTokenPin(id, pin);

        return response(res, 200, tokenPin);
      } else {
        jwt.verify(req.body.tokenPin, process.env.JWT_KEY, (error, decode) => {
          if (error) {
            if (error.message === "jwt expired") {
              return response(res, 401, "PIN expired!");
            } else {
              return response(res, 401, error.message);
            }
          }

          if (req.body.pin !== decode.pin) {
            return response(res, 401, "Incorrect PIN!");
          }

          return response(res, 200, { id: decode.id });
        });
      }
    } catch (error) {
      return response(res, 500, error.message);
    }
  },

  // Update Password
  updatePassword: async (req, res) => {
    try {
      req.body.password = await hashing(req.body.password);
      const result = await models.updateUser(req.body, req.body.id);
      console.log(result);
      if (result.rowCount === 0) {
        return response(res, 404, "User not found!");
      } else {
        return response(res, 200, result);
      }
    } catch (err) {
      return response(res, 500, err.message);
    }
  },
};

module.exports = controller;
