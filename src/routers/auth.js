const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/auth");

routers.post("/", controllers.login);
routers.get("/google", controllers.googleLogin);
routers.get("/google/callback", controllers.googleCallbackLogin);
routers.post("/reset-password", controllers.resetPassword);
routers.put("/reset-password", controllers.updatePassword);

module.exports = routers;
