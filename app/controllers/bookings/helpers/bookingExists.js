const Booking = require('../../../models/booking')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a booking already exists in database
 * @param {string} rut - rut of item
 */
const bookingExists = (rut = '') => {
  return new Promise((resolve, reject) => {
    Booking.findOne(
      {
        rut
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

module.exports = { bookingExists }
