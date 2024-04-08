const { createTable } = require("../src/models/tickets")

module.exports = async () => {
  try {
    await createTable()
    console.log(`Ticket table created`)
  } catch (err) {
    throw err
  }
}
