const Management = require('../../models/management')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { managementExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createManagement = async (req, res) => {
  try {
    req = matchedData(req)
    const doesManagementExistsExists = await managementExists(req.name)
    if (!doesManagementExistsExists) {
      res.status(201).json(await createItem(req, Management))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createManagement }
