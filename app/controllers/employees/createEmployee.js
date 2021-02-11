const Employee = require('../../models/employee')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { employeeExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createEmployee = async (req, res) => {
  try {
    req = matchedData(req)
    const doesEmployeeExists = await employeeExists(req.name)
    if (!doesEmployeeExists) {
      res.status(201).json(await createItem(req, Employee))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createEmployee }
