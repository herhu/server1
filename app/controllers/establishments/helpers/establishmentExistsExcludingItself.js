const Establishment = require('../../../models/establishment')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a establishment already exists excluding itself
 * @param {string} id - id of item
 * @param {string} code - code of item
 */
const EstablishmentExistsExcludingItself = (id = '', code = '') => {
  return new Promise((resolve, reject) => {
    Establishment.findOne(
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
          return reject(buildErrObject(422, 'ESTABLISHMENT_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { EstablishmentExistsExcludingItself }
