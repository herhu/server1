const BedStatus = require('../../../models/bedStatus')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a BedStatus already exists in database
 * @param {string} code - code of item
 */
const bedStatusExists = (code = '') => {
  return new Promise((resolve, reject) => {
    BedStatus.findOne(
      {
        code
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'BED_STATUS_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { bedStatusExists }
