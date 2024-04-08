const models = {};
const db = require("../configs/db");

//Create the existing table
models.createTable = async () => {
  await db.query(
    `CREATE TABLE tickets (
      ticket_id SERIAL PRIMARY KEY,
      booking_id SERIAL NOT NUll,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP,
      CONSTRAINT fk_bookings FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE CASCADE
    )`
  );
};

models.createTicket = async (booking_id) => {
  return await db.query(
    `INSERT INTO tickets (booking_id) 
     VALUES ($1)
     RETURNING ticket_id`,
    [booking_id]
  );
};

//Update a ticket
models.updateTicket = async ({ booking_id }, ticket_id) => {
  return await db.query(
    `UPDATE tickets 
     SET booking_id = $1, updated_at = NOW() 
     WHERE ticket_id = $2
     RETURNING ticket_id`,
    [booking_id, ticket_id]
  );
};

//Delete a ticket
models.deleteTicket = async (ticket_id) => {
  return await db.query(
    `DELETE FROM tickets WHERE ticket_id = $1
     RETURNING ticket_id`,
    [ticket_id]
  );
};

module.exports = models;
