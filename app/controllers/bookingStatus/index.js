const { createBookingStatus } = require('./createBookingStatus')
const { deleteBookingStatus } = require('./deleteBookingStatus')
const { getAllBookingStatuses } = require('./getAllBookingStatuses')
const { getBookingStatus } = require('./getBookingStatus')
const { getBookingStatuses } = require('./getBookingStatuses')
const { updateBookingStatus } = require('./updateBookingStatus')

module.exports = {
  createBookingStatus,
  deleteBookingStatus,
  getAllBookingStatuses,
  getBookingStatus,
  getBookingStatuses,
  updateBookingStatus
}
