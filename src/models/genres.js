const models = {}
const db = require('../configs/db')

//Create the existing table
models.createTable = async () => 
  await db.query(
    `CREATE TABLE genres (
      genre_id SERIAL PRIMARY KEY,
      genre_name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP
    )`)

//Insert the existing data
models.saveData = async ({ genre_name }) => {
  await db.query(
    `INSERT INTO genres (genre_name) 
     VALUES ($1)`,
     [genre_name])
}

module.exports = models