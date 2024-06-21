const controllers = {};
const models = require("../models/users");
const response = require("../utils/response");
const hashing = require("../utils/hash");

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
    req.body.password = await hashing(req.body.password);
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
