const BookingStatus = require('../../../models/bookingStatus')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a bookingStatus already exists in database
 * @param {string} code - code of item
 */
const bookingStatusExists = (code = '') => {
  return new Promise((resolve, reject) => {
    BookingStatus.findOne(
      {
        code
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'BOOKING_STATUS_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { bookingStatusExists }
