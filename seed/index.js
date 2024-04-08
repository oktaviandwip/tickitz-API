const db = require('../src/configs/db')
const bookings = require('./bookings')
const genres = require('./genres')
const movies = require('./movies')
const schedules = require('./schedules')
const users = require('./users')
const moviesGenres = require('./movies-genres')
const tickets = require('./tickets')

db.connect(async (err) => {
  if (err) {
      console.error(err)
      return
  }

  try {
      await movies()
      await users()
      await schedules()
      await bookings()
      await genres()
      await moviesGenres()
      await tickets()

      console.log(`Seed table success!`)
  } catch (err) {
      console.log(err);
  }
})