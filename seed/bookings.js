const { createTable, saveData } = require("../src/models/bookings")

module.exports = async () => {
  try {
    await createTable()
    const bookings = [
      {
        user_id: 1,
        schedule_id: 1,
        date: '2024-02-11',
        time: '14:00',
        seat_choosed: ['A1', 'A2', 'A3'],
        total_seat: 3,
        total_payment: 37.50,
        payment_method: 'PayPal'
      },
      {
        user_id: 2,
        schedule_id: 3,
        date: '2024-02-13',
        time: '13:45',
        seat_choosed: ['B4', 'B5', 'B6'],
        total_seat: 3,
        total_payment: 39.75,
        payment_method: 'BCA'
      },
      {
        user_id: 3,
        schedule_id: 5,
        date: '2024-02-15',
        time: '12:30',
        seat_choosed: ['C7', 'C8', 'C9'],
        total_seat: 3,
        total_payment: 38.25,
        payment_method: 'Dana'
      },
      {
        user_id: 4,
        schedule_id: 7,
        date: '2024-02-17',
        time: '15:00',
        seat_choosed: ['D10', 'D11', 'D12'],
        total_seat: 3,
        total_payment: 41.25,
        payment_method: 'OVO'
      },
      {
        user_id: 5,
        schedule_id: 9,
        date: '2024-02-19',
        time: '12:00',
        seat_choosed: ['E13', 'E14', 'E15'],
        total_seat: 3,
        total_payment: 33.00,
        payment_method: 'Gpay'
      },
      {
        user_id: 6,
        schedule_id: 11,
        date: '2024-02-21',
        time: '15:45',
        seat_choosed: ['F16', 'F17', 'F18'],
        total_seat: 3,
        total_payment: 49.75,
        payment_method: 'Visa Credit Card'
      },
      {
        user_id: 7,
        schedule_id: 13,
        date: '2024-02-23',
        time: '18:00',
        seat_choosed: ['G19', 'G20', 'G21'],
        total_seat: 3,
        total_payment: 40.50,
        payment_method: 'Gopay'
      },
      {
        user_id: 8,
        schedule_id: 15,
        date: '2024-02-25',
        time: '17:15',
        seat_choosed: ['H22', 'H23', 'H24'],
        total_seat: 3,
        total_payment: 36.75,
        payment_method: 'PayPal'
      },
      {
        user_id: 9,
        schedule_id: 17,
        date: '2024-02-27',
        time: '18:15',
        seat_choosed: ['I25', 'I26', 'I27'],
        total_seat: 3,
        total_payment: 44.00,
        payment_method: 'Dana'
      },
      {
        user_id: 10,
        schedule_id: 19,
        date: '2024-03-01',
        time: '13:30',
        seat_choosed: ['J28', 'J29', 'J30'],
        total_seat: 3,
        total_payment: 36.75,
        payment_method: 'BCA'
      },
      {
        user_id: 11,
        schedule_id: 2,
        date: '2024-03-03',
        time: '16:30',
        seat_choosed: ['K31', 'K32', 'K33'],
        total_seat: 3,
        total_payment: 47.25,
        payment_method: 'Gopay'
      },
      {
        user_id: 12,
        schedule_id: 4,
        date: '2024-03-05',
        time: '18:00',
        seat_choosed: ['L34', 'L35', 'L36'],
        total_seat: 3,
        total_payment: 56.00,
        payment_method: 'Visa Credit Card'
      },
      {
        user_id: 13,
        schedule_id: 6,
        date: '2024-03-07',
        time: '14:15',
        seat_choosed: ['M37', 'M38', 'M39'],
        total_seat: 3,
        total_payment: 32.50,
        payment_method: 'PayPal'
      },
      {
        user_id: 14,
        schedule_id: 8,
        date: '2024-03-09',
        time: '15:30',
        seat_choosed: ['N40', 'N41', 'N42'],
        total_seat: 3,
        total_payment: 39.75,
        payment_method: 'BCA'
      },
      {
        user_id: 15,
        schedule_id: 10,
        date: '2024-03-11',
        time: '17:45',
        seat_choosed: ['O43', 'O44', 'O45'],
        total_seat: 3,
        total_payment: 42.50,
        payment_method: 'Dana'
      },
      {
        user_id: 16,
        schedule_id: 12,
        date: '2024-03-13',
        time: '18:15',
        seat_choosed: ['P46', 'P47', 'P48'],
        total_seat: 3,
        total_payment: 49.00,
        payment_method: 'OVO'
      },
      {
        user_id: 17,
        schedule_id: 14,
        date: '2024-03-15',
        time: '12:45',
        seat_choosed: ['Q49', 'Q50', 'Q51'],
        total_seat: 3,
        total_payment: 39.75,
        payment_method: 'Gpay'
      },
      {
        user_id: 18,
        schedule_id: 16,
        date: '2024-03-17',
        time: '14:00',
        seat_choosed: ['R52', 'R53', 'R54'],
        total_seat: 3,
        total_payment: 45.50,
        payment_method: 'PayPal'
      },
      {
        user_id: 19,
        schedule_id: 18,
        date: '2024-03-19',
        time: '15:30',
        seat_choosed: ['S55', 'S56', 'S57'],
        total_seat: 3,
        total_payment: 38.25,
        payment_method: 'Dana'
      },
      {
        user_id: 20,
        schedule_id: 20,
        date: '2024-03-21',
        time: '15:30',
        seat_choosed: ['T58', 'T59', 'T60'],
        total_seat: 3,
        total_payment: 41.75,
        payment_method: 'Visa Credit Card'
      }
    ]
    
    for await (const booking of bookings) {
      await saveData(booking)
    }

    console.log(`${bookings.length} bookings created`)
  } catch (err) {
    throw err
  }
}
