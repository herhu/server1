const Establishment = require('../../../models/establishment')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a establishment already exists in database
 * @param {string} code - code of item
 */
const establishmentExists = (code = '') => {
  return new Promise((resolve, reject) => {
    Establishment.findOne(
      {
        code
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'ESTABLISHMENT_ALREADY_EXISTS'))
        }
        resolve(false)
      }
    )
  })
}

module.exports = { establishmentExists }
