const { validateCreateManagement } = require('./validateCreateManagement')
const { validateDeleteManagement } = require('./validateDeleteManagement')
const { validateGetManagement } = require('./validateGetManagement')
const { validateUpdateManagement } = require('./validateUpdateManagement')

module.exports = {
  validateCreateManagement,
  validateDeleteManagement,
  validateGetManagement,
  validateUpdateManagement
}
