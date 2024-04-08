const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "C:/Users/oktav/Desktop/weekly-tasks-fazztrack/week-5/backend/public/upload"
    );
  },
  filename: function (req, file, cb) {
    const uniquePreffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniquePreffix + "_" + file.originalname);
  },
});

const fileTypes = ["image/png", "image/jpeg", "image/jpg", "image/svg+xml"];
const fileFilter = (req, file, cb) => {
  if (fileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: { fieldSize: 100 * 1024 * 1024 },
});
