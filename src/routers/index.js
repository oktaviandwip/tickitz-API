const express = require("express");
const routers = express.Router();

const auth = require("./auth");
const movies = require("./movies");
const users = require("./users");
const admin = require("./admin");

routers.use("/auth", auth);
routers.use("/movies", movies);
routers.use("/users", users);
routers.use("/admin", admin);

module.exports = routers;
