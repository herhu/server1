const BedStatus = require('../../models/bedStatus')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { bedStatusExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createBedStatus = async (req, res) => {
  try {
    req = matchedData(req)
    const doesBedStatusExists = await bedStatusExists(req.code)
    if (!doesBedStatusExists) {
      res.status(201).json(await createItem(req, BedStatus))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createBedStatus }
