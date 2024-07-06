const controllers = {};
const models = require("../models/users");
const response = require("../utils/response");
const hashing = require("../utils/hash");
const { google } = require("googleapis");

// Get User
controllers.get = async (req, res) => {
  try {
    const result = await models.getUser(req.decodeToken.id);
    return response(res, 200, result);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

// Add User
controllers.add = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await hashing(req.body.password);
    }
    const result = await models.addUser(req.body);
    if (result.rowCount === 1) {
      return response(res, 200, "Registration Succesful!");
    }
  } catch (err) {
    if (err.message.includes("duplicate key")) {
      return response(res, 500, "Email has been used!");
    }
    return response(res, 500, err.message);
  }
};

// Google Signup
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.CALLBACK_URL}/users/google/callback`
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

controllers.googleSignup = async (req, res) => {
  return response(res, 200, authorizationUrl);
};

// Google Callback Signup
controllers.googleCallbackSignup = async (req, res) => {
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

    // Send Data from Google to Signup in FE
    const queryParams = new URLSearchParams(data).toString();
    const redirectUrl = `${process.env.REDIRECT_URL}/users/google/callback?${queryParams}`;
    res.redirect(redirectUrl);
  } catch (error) {
    return response(res, 500, error.message);
  }
};

// Update User
controllers.update = async (req, res) => {
  try {
    req.body.password = await hashing(req.body.password);
    const result = await models.updateUser(req.body, req.decodeToken.id);
    if (result.rowCount === 0) {
      return response(res, 404, "User not found!");
    } else {
      return response(res, 200, result);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

module.exports = controllers;
