const models = {}
const db = require('../configs/db')

//Create the existing table
models.createTable = async () => 
await db.query(
    `CREATE TABLE bookings (
      booking_id SERIAL PRIMARY KEY,
      user_id SERIAL NOT NUll,
      schedule_id SERIAL NOT NUll,
      date DATE NOT NUll,
      time TIME NOT NULL,
      seat_choosed VARCHAR(255)[] NOT NUll,
      total_seat INTEGER NOT NUll,
      total_payment REAL NOT NUll,
      payment_method VARCHAR(255) NOT NUll,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP,
      CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
      CONSTRAINT fk_schedules FOREIGN KEY (schedule_id) REFERENCES schedules(schedule_id) ON DELETE CASCADE
    )`)

//Insert the existing data
models.saveData = async ({ user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method }) => {
  await db.query(
    `INSERT INTO bookings (user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, 
     [user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method])
}

//Get all the bookings
models.getData = async (page, id) => {
  try {
    if (id === undefined) {
      const offset = (page - 1) * 10
      const { rows } = await db.query(`SELECT * FROM bookings LIMIT 10 OFFSET $1`, [offset])
      let { rows: [{ count }] } = await db.query('SELECT COUNT(*) FROM bookings')
      count = parseInt(count)

      const meta = {
        next: count <= 10? null : page === Math.ceil(count/10)? null : page + 1,
        prev: page === 1? null : page - 1,
        total: count
      }
      
      return { rows, meta }
    }

    const offset = (page - 1) * 3
    const { rows } = await db.query(`SELECT * FROM bookings WHERE user_id = $1 LIMIT 3 OFFSET $2`, [id, offset])
    let { rows: [{ count }] } = await db.query(`SELECT COUNT(*) FROM bookings WHERE user_id = $1`, [id])
    count = parseInt(count)

    const meta = {
      next: count <= 3? null : page === Math.ceil(count/3)? null : page + 1,
      prev: page === 1? null : page - 1,
      total: count
    }

    return { rows, meta }
  } catch (err) {
    throw err
  }
}

//Add a booking
models.addData = async ({ user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method }) => {
  return await db.query(
    `INSERT INTO bookings (user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING booking_id`, 
     [user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method])
}

//Update a booking
models.updateData = async ({ user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method }, id) => {
  return await db.query(
    `UPDATE bookings 
     SET user_id = $1, schedule_id = $2, date = $3, time = $4, seat_choosed = $5, total_seat = $6, total_payment = $7, payment_method = $8, updated_at = NOW() 
     WHERE booking_id = $9
     RETURNING booking_id`,
     [user_id, schedule_id, date, time, seat_choosed, total_seat, total_payment, payment_method, id]
  )
}


//Delete a booking
models.deleteData = async ( id ) => {
  return await db.query(
    `DELETE FROM bookings WHERE booking_id = $1
     RETURNING booking_id`, 
     [id])
}

module.exports = models