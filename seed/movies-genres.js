const { createTable, saveData } = require("../src/models/movies-genres")

module.exports = async () => {
  try {
    await createTable()
    const { rows } = await saveData()

    console.log(`${rows[0].count} data movies-genres created`)
  } catch (err) {
    throw err
  }
}
