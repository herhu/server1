const Management = require('../../../models/management')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a management already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const managementExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    Management.findOne(
      {
        name,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'MANAGEMENT_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { managementExistsExcludingItself }
