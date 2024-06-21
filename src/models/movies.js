const models = {};
const db = require("../configs/db");

// Get All Movies
models.getAllMovies = async (page) => {
  try {
    const offset = (page - 1) * 12;
    const { rows } = await db.query(
      `SELECT * FROM movies ORDER BY id DESC LIMIT 12 OFFSET $1`,
      [offset]
    );
    let {
      rows: [{ count }],
    } = await db.query("SELECT COUNT(*) FROM movies");
    count = parseInt(count);

    const meta = {
      next:
        count <= 12 ? null : page === Math.ceil(count / 12) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

// Search Movies
models.searchMovies = async (name, page) => {
  try {
    const searchName = `%${name}%`;
    const offset = (page - 1) * 12;
    const { rows } = await db.query(
      `SELECT * FROM movies WHERE movie_name ILIKE $1 ORDER BY id DESC LIMIT 12 OFFSET $2`,
      [searchName, offset]
    );
    let {
      rows: [{ count }],
    } = await db.query(
      `SELECT COUNT(*) FROM movies WHERE movie_name ILIKE $1`,
      [searchName]
    );
    count = parseInt(count);

    const meta = {
      next:
        count <= 12 ? null : page === Math.ceil(count / 12) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

// Filter Movies Based on Genre
models.filterMovies = async (genre, page) => {
  try {
    const offset = (page - 1) * 12;
    const { rows } = await db.query(
      `SELECT * FROM movies WHERE $1 = ANY(category) ORDER BY movie_name DESC LIMIT 12 OFFSET $2`,
      [genre, offset]
    );
    let {
      rows: [{ count }],
    } = await db.query(`SELECT COUNT(*) FROM movies WHERE $1 = ANY(category)`, [
      genre,
    ]);
    count = parseInt(count);

    const meta = {
      next:
        count <= 10 ? null : page === Math.ceil(count / 12) ? null : page + 1,
      prev: page === 1 ? null : page - 1,
      total: count,
    };

    return { rows, meta };
  } catch (err) {
    throw err;
  }
};

// Get Movie Details
models.getMovie = (name) => {
  return db.query(
    `SELECT * FROM movies WHERE detail = $1 ORDER BY id DESC LIMIT 1`,
    [name]
  );
};

module.exports = models;
