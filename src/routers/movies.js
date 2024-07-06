const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/movies");

routers.get("/", controllers.getOrFilter);

module.exports = routers;
