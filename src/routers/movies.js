const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/movies");
const authCheck = require("../middleware/auth");
const upload = require("../middleware/upload");

routers.get("/", authCheck(), controllers.getOrFilter);

module.exports = routers;
