const Employee = require('../../models/employee')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { employeeExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateEmployee = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesEmployeeExists = await employeeExistsExcludingItself(id, req.name)
    if (!doesEmployeeExists) {
      res.status(200).json(await updateItem(id, Employee, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateEmployee }
