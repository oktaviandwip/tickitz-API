const models = {}
const db = require('../configs/db')

//Create the existing table
models.createTable = async () => 
  await db.query(
    `CREATE TABLE movies_genres (
      movie_id SERIAL NOT NULL,
      genre_id SERIAL NOT NULL,
      CONSTRAINT fk_movies FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE,
      CONSTRAINT fk_genres FOREIGN KEY (genre_id) REFERENCES genres(genre_id) ON DELETE CASCADE
    )`)

//Insert the existing data
models.saveData = async () => {
  await db.query(
    `INSERT INTO movies_genres
     SELECT temp_movies.movie_id, g.genre_id
     FROM ( SELECT movie_id, TRIM(UNNEST(category)) AS genre
            FROM movies
          ) AS temp_movies
     JOIN genres AS g ON temp_movies.genre = g.genre_name
     `)
  return await db.query(`SELECT COUNT(*) FROM movies_genres`)
}

module.exports = models