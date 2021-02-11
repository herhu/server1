const Company = require('../../../models/company')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a company already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const companyExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    Company.findOne(
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
          return reject(buildErrObject(422, 'COMPANY_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { companyExistsExcludingItself }
