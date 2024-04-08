const controllers = {};
const fs = require("fs");
const models = require("../models/admin");
const response = require("../utils/response");

// Get all or sort the movies
controllers.getOrSort = async (req, res) => {
  if (Object.keys(req.query)[0] === "page") {
    try {
      const page = parseInt(Object.values(req.query)[0]);
      const data = await models.getData(page);
      return response(res, 200, data);
    } catch (err) {
      return response(res, 500, err.message);
    }
  } else {
    try {
      const { date, page } = req.query;
      const parsedPage = parseInt(page);
      const data = await models.sortData(date, parsedPage);
      return response(res, 200, data);
    } catch (err) {
      return response(res, 500, err.message);
    }
  }
};

// Get a movie
controllers.get = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await models.getMovie(id);
    return response(res, 200, data);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

// Add the movie
controllers.add = async (req, res) => {
  console.log(req.body);
  try {
    const { rows } = await models.addData(req.body);
    if (rows.length === 1) {
      return response(res, 200, rows);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

// Update a movie
controllers.update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await models.updateMovie(req.body, id);
    return response(res, 200, data);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Delete a movie
controllers.delete = async (req, res) => {
  {
    try {
      const { id } = req.params;
      const data = await models.deleteMovie(id);
      return response(res, 200, data);
    } catch (err) {
      return response(res, 500, err.message);
    }
  }
};

module.exports = controllers;
