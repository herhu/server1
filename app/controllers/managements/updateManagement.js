const Management = require('../../models/management')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { managementExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateManagement = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesManagementExists = await managementExistsExcludingItself(
      id,
      req.name
    )
    if (!doesManagementExists) {
      res.status(200).json(await updateItem(id, Management, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateManagement }
