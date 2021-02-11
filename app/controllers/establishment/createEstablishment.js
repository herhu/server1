const Establishment = require('../../models/establishment')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { establishmentExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createEstablishment = async (req, res) => {
  try {
    req = matchedData(req)
    const doesEstablishmentExists = await establishmentExists(req.code)
    if (!doesEstablishmentExists) {
      res.status(201).json(await createItem(req, Establishment))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createEstablishment }
