const { validateCreateBookingStatus } = require('./validateCreateBookingStatus')
const { validateDeleteBookingStatus } = require('./validateDeleteBookingStatus')
const { validateGetBookingStatus } = require('./validateGetBookingStatus')
const { validateUpdateBookingStatus } = require('./validateUpdateBookingStatus')

module.exports = {
  validateCreateBookingStatus,
  validateDeleteBookingStatus,
  validateGetBookingStatus,
  validateUpdateBookingStatus
}
