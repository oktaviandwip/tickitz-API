const response = require("../utils/response");
const jwt = require("jsonwebtoken");

module.exports = (role = "user") => {
  return (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return response(res, 401, "Login please!");
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
      if (err) {
        return response(res, 401, err.message);
      }

      if (role === "admin" && decode.role === "admin") {
        req.decodeToken = decode;
        next();
      } else if (
        role === "user" &&
        (decode.role === "admin" || decode.role === "user")
      ) {
        req.decodeToken = decode;
        next();
      } else {
        return response(res, 401, `Invalid role, required role: ${role}`);
      }
    });
  };
};
