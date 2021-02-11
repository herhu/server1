const { createBooking } = require('./createBooking')
const { deleteBooking } = require('./deleteBooking')
const { getAllBookings } = require('./getAllBookings')
const { getBooking } = require('./getBooking')
const { getBookings } = require('./getBookings')
const { updateBooking } = require('./updateBooking')

module.exports = {
  createBooking,
  deleteBooking,
  getAllBookings,
  getBooking,
  getBookings,
  updateBooking
}
