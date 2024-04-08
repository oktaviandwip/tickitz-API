const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/users");
const upload = require("../middleware/upload");

routers.get("/", controllers.get);
routers.get("/:id", controllers.getUser);
routers.post("/", controllers.add);
routers.post("/sign-up", controllers.add);
routers.put("/:id", upload.single("image"), controllers.update);
routers.delete("/:id", controllers.delete);

module.exports = routers;
