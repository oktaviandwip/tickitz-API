const controllers = {};
const fs = require("fs");
const models = require("../models/movies");
const response = require("../utils/response");

// Get or Filter Movies
controllers.getOrFilter = async (req, res) => {
  try {
    // Get All Movies
    if (Object.keys(req.query)[0] === "page") {
      const page = parseInt(Object.values(req.query)[0]);
      const data = await models.getAllMovies(page);
      return response(res, 200, data);
    }

    // Search Movies
    else if (Object.keys(req.query)[0] === "search") {
      const search = Object.values(req.query)[0];
      const page = parseInt(Object.values(req.query)[1]);
      const data = await models.searchMovies(search, page);
      return response(res, 200, data);
    }

    // Filter by Genre
    else if (Object.keys(req.query)[0] === "genre") {
      const genre = Object.values(req.query)[0];
      const page = parseInt(Object.values(req.query)[1]);
      const data = await models.filterMovies(genre, page);
      return response(res, 200, data);
    }

    // Get Movie Details
    else {
      const name = Object.values(req.query)[0];
      const data = await models.getMovie(name);
      return response(res, 200, data);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

module.exports = controllers;
