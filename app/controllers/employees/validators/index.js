const { validateCreateEmployee } = require('./validateCreateEmployee')
const { validateDeleteEmployee } = require('./validateDeleteEmployee')
const { validateGetEmployee } = require('./validateGetEmployee')
const { validateUpdateEmployee } = require('./validateUpdateEmployee')

module.exports = {
  validateCreateEmployee,
  validateDeleteEmployee,
  validateGetEmployee,
  validateUpdateEmployee
}
