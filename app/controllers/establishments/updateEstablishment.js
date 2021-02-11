const Establishment = require('../../models/establishment')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { EstablishmentExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateEstablishment = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesEstablishmentExists = await EstablishmentExistsExcludingItself(
      id,
      req.name
    )
    if (!doesEstablishmentExists) {
      res.status(200).json(await updateItem(id, Establishment, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateEstablishment }
