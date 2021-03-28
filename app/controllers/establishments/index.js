const { createEstablishment } = require('./createEstablishment')
const { deleteEstablishment } = require('./deleteEstablishment')
const { getAllEstablishments } = require('./getAllEstablishments')
const { getEstablishment } = require('./getEstablishment')
const { getEstablishments } = require('./getEstablishments')
const { updateEstablishment } = require('./updateEstablishment')
const { updateBedStatus } = require('./updateBedStatus')

module.exports = {
  createEstablishment,
  deleteEstablishment,
  getAllEstablishments,
  getEstablishment,
  getEstablishments,
  updateEstablishment,
  updateBedStatus
}
