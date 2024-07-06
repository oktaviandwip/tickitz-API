const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/admin");
const authCheck = require("../middleware/auth");
const upload = require("../middleware/upload");

routers.get("/movies", authCheck("admin"), controllers.getOrSort);
routers.get("/movies/:id", authCheck("admin"), controllers.get);
routers.post(
  "/movies",
  authCheck("admin"),
  upload.single("image"),
  controllers.add
);
routers.put(
  "/movies/:id",
  authCheck("admin"),
  upload.single("image"),
  controllers.update
);

routers.delete("/movies/:id", authCheck("admin"), controllers.delete);

module.exports = routers;
