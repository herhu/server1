const BookingStatus = require('../../../models/bookingStatus')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a company already exists excluding itself
 * @param {string} id - id of item
 * @param {string} code - code of item
 */
const bookingStatusExistsExcludingItself = (id = '', code = '') => {
  return new Promise((resolve, reject) => {
    BookingStatus.findOne(
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
          return reject(buildErrObject(422, 'BOOKING_STATUS_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { bookingStatusExistsExcludingItself }
