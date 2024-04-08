const { createTable, saveData } = require("../src/models/genres")

module.exports = async () => {
  try {
    await createTable()
    const genres = [
      { genre_name: 'Action' },
      { genre_name: 'Adventure' },
      { genre_name: 'Animation' },
      { genre_name: 'Biography' },
      { genre_name: 'Comedy' },
      { genre_name: 'Crime' },
      { genre_name: 'Drama' },
      { genre_name: 'Fantasy' },
      { genre_name: 'History' },
      { genre_name: 'Horror' },
      { genre_name: 'Musical' },
      { genre_name: 'Mystery' },
      { genre_name: 'Romance' },
      { genre_name: 'Sci-Fi' },
      { genre_name: 'Sport' },
      { genre_name: 'Thriller' },
      { genre_name: 'War' },
      { genre_name: 'Western' },
      { genre_name: 'Family' },
      { genre_name: 'Documentary' }
    ]
    
    for await (const genre of genres) {
      await saveData(genre)
    }

    console.log(`${genres.length} genres created`)
  } catch (err) {
    throw err
  }
}
