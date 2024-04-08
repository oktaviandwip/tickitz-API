const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/movies");
const authCheck = require("../middleware/auth");
const upload = require("../middleware/upload");
const response = require("../utils/response");
const multer = require("multer");

routers.get("/", authCheck(), controllers.getOrSort);
routers.get("/:name", authCheck(), controllers.search);
routers.post("/", authCheck("admin"), upload.single("image"), controllers.add);
routers.put(
  "/:id",
  authCheck("admin"),
  upload.single("image"),
  controllers.update
);
routers.delete("/:id", authCheck("admin"), controllers.delete);

module.exports = routers;
