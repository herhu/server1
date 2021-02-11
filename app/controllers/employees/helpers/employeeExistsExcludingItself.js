const Employee = require('../../../models/employee')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a company already exists excluding itself
 * @param {string} id - id of item
 * @param {string} rut - rut of item
 */
const employeeExistsExcludingItself = (id = '', rut = '') => {
  return new Promise((resolve, reject) => {
    Employee.findOne(
      {
        rut,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }

        if (item) {
          return reject(buildErrObject(422, 'EMPLOYEE_ALREADY_EXISTS'))
        }

        resolve(false)
      }
    )
  })
}

module.exports = { employeeExistsExcludingItself }
