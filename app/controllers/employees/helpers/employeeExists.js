const Employee = require('../../../models/employee')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Checks if a employee already exists in database
 * @param {string} rut - rut of item
 */
const employeeExists = (rut = '') => {
  return new Promise((resolve, reject) => {
    Employee.findOne(
      {
        rut
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

module.exports = { employeeExists }
