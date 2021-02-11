const Booking = require('../../../models/booking')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a booking already exists excluding itself
 * @param {string} id - id of item
 * @param {string} code - code of item
 */
const bookingExistsExcludingItself = (id = '', code = '') => {
  return new Promise((resolve, reject) => {
    Booking.findOne(
      {
        code,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'BOOKING_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { bookingExistsExcludingItself }
