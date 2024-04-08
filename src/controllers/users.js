const controllers = {};
const models = require("../models/users");
const response = require("../utils/response");
const hashing = require("../utils/hash");

//Get all the users
controllers.get = async (req, res) => {
  try {
    const page = parseInt(Object.values(req.query)[0]);
    const data = await models.getData(page);
    return response(res, 200, data);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Get a user
controllers.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await models.getUser(id);
    return response(res, 200, data);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Add a user
controllers.add = async (req, res) => {
  try {
    req.body.password = await hashing(req.body.password);
    const { rows } = await models.addData(req.body);
    if (rows.length === 1) {
      return response(res, 200, rows);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Update a user
controllers.update = async (req, res) => {
  try {
    req.body.password = await hashing(req.body.password);
    req.body.confirm_password = await hashing(req.body.confirm_password);
    const { rows } = await models.updateData(req.body, req.params.id);
    if (rows.length === 0) {
      return response(res, 404, "User not Found");
    } else {
      return response(res, 200, rows);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Delete a user
controllers.delete = async (req, res) => {
  try {
    const { rows } = await models.deleteData(req.params.id);
    if (rows.length === 0) {
      return response(res, 404, "User not Found");
    } else {
      return response(res, 200, rows);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

module.exports = controllers;
