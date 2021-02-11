const Management = require('../../../models/management')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a management already exists in database
 * @param {string} name - name of item
 */
const managementExists = (name = '') => {
  return new Promise((resolve, reject) => {
    Management.findOne(
      {
        name
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

module.exports = { managementExists }
