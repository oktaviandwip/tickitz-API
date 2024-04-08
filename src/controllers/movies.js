const controllers = {};
const fs = require("fs");
const models = require("../models/movies");
const response = require("../utils/response");

//Get and sort all the movies
controllers.getOrSort = async (req, res) => {
  if (Object.keys(req.query)[0] === "page") {
    try {
      const page = parseInt(Object.values(req.query)[0]);
      const data = await models.getData(page);
      return response(res, 200, data);
    } catch (err) {
      return response(res, 500, err.message);
    }
  } else if (Object.keys(req.query)[0] === "genre") {
    try {
      const genre = Object.values(req.query)[0];
      const page = parseInt(Object.values(req.query)[1]);
      const data = await models.filterData(genre, page);
      return response(res, 200, data);
    } catch (err) {
      return response(res, 500, err.message);
    }
  } else {
    try {
      const { sortby, order, page } = req.query;
      const parsedPage = parseInt(page);
      const data = await models.sortData(sortby, order, parsedPage);
      return response(res, 200, data);
    } catch (err) {
      return response(res, 500, err.message);
    }
  }
};

//Search the movies
controllers.search = async (req, res) => {
  try {
    const page = parseInt(Object.values(req.query)[0]);
    const data = await models.searchData(req.params.name, page);
    return response(res, 200, data);
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Add a movie
controllers.add = async (req, res) => {
  try {
    if (req.file !== undefined) {
      req.body.image = `http://localhost:8000/image/${req.file.filename}`;
    }

    const { rows } = await models.addData(req.body);
    if (rows.length === 1) {
      return response(res, 200, rows);
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Update a movie
controllers.update = async (req, res) => {
  try {
    if (req.file !== undefined) {
      req.body.image = `http://localhost:8000/image/${req.file.filename}`;
    }

    const { image, movie_id } = await models.updateData(
      req.body,
      req.params.id
    );
    if (movie_id === undefined) {
      return response(res, 404, "Movie not Found");
    } else {
      const filePath =
        "C:/Users/oktav/Desktop/weekly-tasks-fazztrack/week-5/backend/public/upload/" +
        image.split("/")[4];

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err}`);
        } else {
          console.log(`File ${filePath} deleted successfully`);
          return response(res, 200, { movie_id });
        }
      });
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

//Delete a movie
controllers.delete = async (req, res) => {
  try {
    const { image, movie_id } = await models.deleteData(req.params.id);
    if (movie_id === undefined) {
      return response(res, 404, "Movie not Found");
    } else {
      const filePath =
        "C:/Users/oktav/Desktop/weekly-tasks-fazztrack/week-5/backend/public/upload/" +
        image.split("/")[4];

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${err}`);
        } else {
          console.log(`File ${filePath} deleted successfully`);
          return response(res, 200, { movie_id });
        }
      });
    }
  } catch (err) {
    return response(res, 500, err.message);
  }
};

module.exports = controllers;
