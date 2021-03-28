const Establishment = require('../../models/establishment')
const { updateStatus } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateBedStatus = async (req, res) => {
  try {
    req = matchedData(req)
    res.status(200).json(await updateStatus(Establishment, req))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateBedStatus }
