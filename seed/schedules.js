const { createTable, saveData } = require("../src/models/schedules")

module.exports = async () => {
  try {
    await createTable()
    const schedules = [
      { movie_id: 1, price: 12.50, cinema: 'ebv.id', location: 'Purwokerto', date_start: '2024-02-10', date_end: '2024-02-15', time: ['14:00', '18:30'] },
      { movie_id: 2, price: 11.75, cinema: 'CineOne21', location: 'Purwokerto', date_start: '2024-02-12', date_end: '2024-02-17', time: ['15:30', '20:00'] },
      { movie_id: 3, price: 13.25, cinema: 'hiflix Cinema', location: 'Purwokerto', date_start: '2024-02-14', date_end: '2024-02-19', time: ['13:45', '17:30'] },
      { movie_id: 4, price: 14.00, cinema: 'ebv.id', location: 'Banjarnegara', date_start: '2024-02-16', date_end: '2024-02-21', time: ['16:15', '21:00'] },
      { movie_id: 5, price: 12.75, cinema: 'CineOne21', location: 'Banjarnegara', date_start: '2024-02-18', date_end: '2024-02-23', time: ['12:30', '19:45'] },
      { movie_id: 6, price: 10.50, cinema: 'hiflix Cinema', location: 'Banjarnegara', date_start: '2024-02-20', date_end: '2024-02-25', time: ['14:45', '18:00'] },
      { movie_id: 7, price: 13.75, cinema: 'ebv.id', location: 'Purbalingga', date_start: '2024-02-22', date_end: '2024-02-27', time: ['15:00', '20:30'] },
      { movie_id: 8, price: 15.50, cinema: 'CineOne21', location: 'Purbalingga', date_start: '2024-02-24', date_end: '2024-02-29', time: ['17:15', '22:00'] },
      { movie_id: 9, price: 11.00, cinema: 'hiflix Cinema', location: 'Purbalingga', date_start: '2024-02-26', date_end: '2024-03-02', time: ['12:00', '18:15'] },
      { movie_id: 10, price: 12.25, cinema: 'ebv.id', location: 'Wonosobo', date_start: '2024-02-28', date_end: '2024-03-04', time: ['13:30', '19:00'] },
      { movie_id: 11, price: 14.75, cinema: 'CineOne21', location: 'Wonosobo', date_start: '2024-03-01', date_end: '2024-03-06', time: ['15:45', '21:30'] },
      { movie_id: 12, price: 16.00, cinema: 'hiflix Cinema', location: 'Wonosobo', date_start: '2024-03-03', date_end: '2024-03-08', time: ['16:30', '22:15'] },
      { movie_id: 13, price: 13.00, cinema: 'ebv.id', location: 'Kebumen', date_start: '2024-03-05', date_end: '2024-03-10', time: ['18:00', '23:45'] },
      { movie_id: 14, price: 12.50, cinema: 'CineOne21', location: 'Kebumen', date_start: '2024-03-07', date_end: '2024-03-12', time: ['14:15', '19:30'] },
      { movie_id: 15, price: 11.75, cinema: 'hiflix Cinema', location: 'Kebumen', date_start: '2024-03-09', date_end: '2024-03-14', time: ['15:30', '20:45'] },
      { movie_id: 16, price: 13.25, cinema: 'ebv.id', location: 'Magelang', date_start: '2024-03-11', date_end: '2024-03-16', time: ['17:45', '22:30'] },
      { movie_id: 17, price: 14.00, cinema: 'CineOne21', location: 'Magelang', date_start: '2024-03-13', date_end: '2024-03-18', time: ['18:15', '23:00'] },
      { movie_id: 18, price: 12.75, cinema: 'hiflix Cinema', location: 'Magelang', date_start: '2024-03-15', date_end: '2024-03-20', time: ['12:45', '19:00'] },
      { movie_id: 19, price: 10.50, cinema: 'ebv.id', location: 'Temanggung', date_start: '2024-03-17', date_end: '2024-03-22', time: ['14:00', '18:30'] },
      { movie_id: 20, price: 13.75, cinema: 'CineOne21', location: 'Temanggung', date_start: '2024-03-19', date_end: '2024-03-24', time: ['15:30', '20:00'] }
  ]
    
    for await (const schedule of schedules) {
      await saveData(schedule)
    }

    console.log(`${schedules.length} schedules created`)
  } catch (err) {
    throw err
  }
}
