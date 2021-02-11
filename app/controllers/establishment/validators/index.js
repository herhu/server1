const { validateCreateEstablishment } = require('./validateCreateEstablishment')
const { validateDeleteEstablishment } = require('./validateDeleteEstablishment')
const { validateGetEstablishment } = require('./validateGetEstablishment')
const { validateUpdateEstablishment } = require('./validateUpdateEstablishment')

module.exports = {
  validateCreateEstablishment,
  validateDeleteEstablishment,
  validateGetEstablishment,
  validateUpdateEstablishment
}
