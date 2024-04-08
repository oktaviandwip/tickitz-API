const models = {};
const db = require("../configs/db");

//Get all the movies
models.getData = async (page) => {
  try {
    const offset = (page - 1) * 5;
    const { rows } = await db.query(
      `SELECT * FROM movies ORDER BY movie_id DESC LIMIT 5 OFFSET $1`,
      [offset]
    );
    let {
      rows: [{ count }],
    } = await db.query("SELECT COUNT(*) FROM movies");
    count = parseInt(count);

    const meta = {
      next: count <= 5 ? null : page === Math.ceil(count / 5) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

// Get a movie
models.getMovie = async (id) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM movies WHERE movie_id = $1`,
      [id]
    );
    return { rows };
  } catch (err) {
    throw err;
  }
};

//Sort the movies
models.sortData = async (date, page) => {
  try {
    const offset = (page - 1) * 5;
    const { rows } = await db.query(
      `SELECT * FROM movies WHERE release_date < $1 LIMIT 5 OFFSET $2`,
      [date, offset]
    );
    let {
      rows: [{ count }],
    } = await db.query("SELECT COUNT(*) FROM movies WHERE release_date < $1", [
      date,
    ]);
    count = parseInt(count);

    const meta = {
      next: count <= 5 ? null : page === Math.ceil(count / 5) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

// Add the movie
models.addData = async ({
  image,
  movie_name,
  category,
  release_date,
  hours,
  minutes,
  director,
  casts,
  synopsis,
  location,
  date,
  time,
  recommended,
}) => {
  // Casts, Category & Time
  category = category.split(",").map((data) => data.trim());
  casts = casts.split(",").map((data) => data.trim());
  time = time.split(",").map((data) => data.trim());

  // Detail
  let lowercaseString = movie_name.toLowerCase();

  // Remove spaces and unwanted characters
  let sanitizedString = "";
  for (let i = 0; i < lowercaseString.length; i++) {
    const char = lowercaseString[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9") ||
      char === " "
    ) {
      sanitizedString += char;
    }
  }

  // Replace spaces with dashes
  let urlFriendlyString = sanitizedString.split(" ").join("-");

  // Add file extension
  let detail = `/${urlFriendlyString}`;

  return await db.query(
    `INSERT INTO movies (image, movie_name, category, release_date, hours, minutes, director, casts, synopsis, location, date, time, recommended, detail) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
     RETURNING movie_id`,
    [
      image,
      movie_name,
      category,
      release_date,
      hours,
      minutes,
      director,
      casts,
      synopsis,
      location,
      date,
      time,
      recommended,
      detail,
    ]
  );
};

//Update a movie
models.updateMovie = async (
  {
    image,
    movie_name,
    category,
    release_date,
    hours,
    minutes,
    director,
    casts,
    synopsis,
    location,
    date,
    time,
    recommended,
  },
  id
) => {
  // Casts, Category & Time
  category = category.split(",").map((data) => data.trim());
  casts = casts.split(",").map((data) => data.trim());
  time = time.split(",").map((data) => data.trim());

  // Convert to lowercase
  let lowercaseString = movie_name.toLowerCase();

  // Remove spaces and unwanted characters
  let sanitizedString = "";
  for (let i = 0; i < lowercaseString.length; i++) {
    const char = lowercaseString[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9") ||
      char === " "
    ) {
      sanitizedString += char;
    }
  }

  // Replace spaces with dashes
  let urlFriendlyString = sanitizedString.split(" ").join("-");

  // Add file extension
  let detail = `/${urlFriendlyString}.html`;

  return await db.query(
    `UPDATE movies
     SET image = $1, movie_name = $2, category = $3, director = $4, casts = $5, 
     release_date = $6, hours = $7, minutes = $8, synopsis = $9, location = $10, date = $11, time = $12,  recommended = $13, detail = $14, updated_at = NOW() 
     WHERE movie_id = $15
     RETURNING movie_id`,
    [
      image,
      movie_name,
      category,
      director,
      casts,
      release_date,
      hours,
      minutes,
      synopsis,
      location,
      date,
      time,
      recommended,
      detail,
      id,
    ]
  );
};

//Delete a movie
models.deleteMovie = async (id) => {
  return await db.query(
    `DELETE FROM movies WHERE movie_id = $1
     RETURNING movie_id`,
    [id]
  );
};

module.exports = models;
