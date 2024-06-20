const controllers = {};
const fs = require("fs");
const models = require("../models/admin");
const response = require("../utils/response");

// Get All or Sort Movies
controllers.getOrSort = async (req, res) => {
  try {
    if (Object.keys(req.query)[0] === "page") {
      const page = parseInt(Object.values(req.query)[0]);
      const data = await models.getAllMovies(page);
      return response(res, 200, data);
    } else {
      const { date, page } = req.query;
      const parsedPage = parseInt(page);
      const data = await models.sortMovies(date, parsedPage);
      return response(res, 200, data);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

// Get Movie
controllers.get = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await models.getMovie(id);
    return response(res, 200, data);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

// Add Movie
controllers.add = async (req, res) => {
  try {
    const result = await models.addMovie(req.body);
    if (result.rowCount === 1) {
      return response(res, 200, result);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

// Update Movie
controllers.update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await models.updateMovie(req.body, id);
    return response(res, 200, data);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

// Delete Movie
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
