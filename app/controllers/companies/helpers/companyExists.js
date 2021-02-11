const Company = require('../../../models/company')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a company already exists in database
 * @param {string} name - name of item
 */
const companyExists = (name = '') => {
  return new Promise((resolve, reject) => {
    Company.findOne(
      {
        name
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

module.exports = { companyExists }
