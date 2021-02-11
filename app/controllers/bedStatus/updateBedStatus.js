const BedStatus = require('../../models/bedStatus')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { bedStatusExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateBedStatus = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesBedStatusExists = await bedStatusExistsExcludingItself(
      id,
      req.name
    )
    if (!doesBedStatusExists) {
      res.status(200).json(await updateItem(id, BedStatus, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateBedStatus }
