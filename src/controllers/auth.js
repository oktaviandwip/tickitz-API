const controllers = {};
const models = require("../models/users");
const bcrypt = require("bcrypt");
const response = require("../utils/response");
const jwt = require("jsonwebtoken");

const genToken = (role, user_id) => {
  const payload = {
    role,
    user_id,
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "24h" });
  return token;
};

controllers.login = async (req, res) => {
  try {
    const rows = await models.getPassword(req.body.email);
    if (rows.length === 0) {
      return response(res, 401, "Email is not registered!");
    }

    const password = req.body.password;
    const hashPass = rows[0].password;
    const check = await bcrypt.compare(password, hashPass);

    if (check) {
      const role = rows[0].role;
      const user_id = rows[0].user_id;
      const tokenJwt = genToken(role, user_id);
      return response(res, 200, { token: tokenJwt });
    } else {
      return response(res, 401, "Wrong password!");
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

module.exports = controllers;
