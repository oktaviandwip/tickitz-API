const models = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const response = require("../utils/response");

const genToken = (role, id) => {
  const payload = {
    role,
    id,
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "14d" });
  return token;
};

const controller = {
  login: async (req, res) => {
    try {
      const result = await models.getPassByEmail(req.body.email);
      if (result.rowCount === 0) {
        return response(res, 401, "Email not found!");
      }

      const { role, id } = result.rows[0];
      const password = result.rows[0].password;
      const passwordUser = req.body.password;
      const check = await bcrypt.compare(passwordUser, password);

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
      response(res, 500, error.message);
    }
  },
};

module.exports = controller;
