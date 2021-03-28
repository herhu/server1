const { validateCreateEstablishment } = require('./validateCreateEstablishment')
const { validateDeleteEstablishment } = require('./validateDeleteEstablishment')
const { validateGetEstablishment } = require('./validateGetEstablishment')
const { validateUpdatedBedStatus } = require('./validateUpdatedBedStatus')
const { validateUpdateEstablishment } = require('./validateUpdateEstablishment')

module.exports = {
  validateCreateEstablishment,
  validateDeleteEstablishment,
  validateGetEstablishment,
  validateUpdatedBedStatus,
  validateUpdateEstablishment
}
