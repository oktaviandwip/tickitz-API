const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/users");
const authCheck = require("../middleware/auth");
const upload = require("../middleware/upload");

routers.post("/", controllers.add);
routers.get("/", authCheck(), controllers.get);
routers.put("/", authCheck(), upload.single("image"), controllers.update);

module.exports = routers;
