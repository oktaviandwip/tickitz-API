const models = {}
const db = require('../configs/db')

//Create the existing table
models.createTable = async () => 
await db.query(
    `CREATE TABLE schedules (
      schedule_id SERIAL PRIMARY KEY,
      movie_id SERIAL NOT NULL,
      price REAL NOT NULL,
      cinema VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      date_start DATE NOT NULL,
      date_end DATE NOT NULL,
      time TIME[] NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP,
      CONSTRAINT fk_movies FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE
    )`)

//Insert the existing data
models.saveData = async ({ movie_id, price, cinema, location, date_start, date_end, time }) => {
  await db.query(
    `INSERT INTO schedules (movie_id, price, cinema, location, date_start, date_end, time)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
     [movie_id, price, cinema, location, date_start, date_end, time])
}

//Get all the schedules
models.getData = async (page) => {
  try {
    const offset = (page - 1) * 10
    const { rows } = await db.query(`SELECT * FROM schedules LIMIT 10 OFFSET $1`, [offset])
    let { rows: [{ count }] } = await db.query('SELECT COUNT(*) FROM schedules')
    count = parseInt(count)
    
    const meta = {
      next: count <= 10? null : page === Math.ceil(count/10)? null : page + 1,
      prev: page === 1? null : page - 1,
      total: count
    }
    
    return { rows, meta }
  } catch (err) {
    throw err
  }
}

//Add a schedule
models.addData = async ({ movie_id, price, cinema, location, date_start, date_end, time }) => {
  return await db.query(
    `INSERT INTO schedules (movie_id, price, cinema, location, date_start, date_end, time)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING schedule_id`, 
     [movie_id, price, cinema, location, date_start, date_end, time])
}

//Update a schedule
models.updateData = async ({ movie_id, price, cinema, location, date_start, date_end, time }, id) => {
  return await db.query(
    `UPDATE schedules 
     SET movie_id = $1, price = $2, cinema = $3, location = $4, date_start = $5, date_end = $6, time = $7, updated_at = NOW() WHERE schedule_id = $8
     RETURNING schedule_id`, 
     [movie_id, price, cinema, location, date_start, date_end, time, id])
}

//Delete a schedule
models.deleteData = async ( id ) => {
  return await db.query(
    `DELETE FROM schedules WHERE schedule_id = $1
     RETURNING schedule_id`,
     [id])
}

module.exports = models