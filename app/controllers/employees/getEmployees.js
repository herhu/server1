const Employee = require('../../models/employee')
const { checkQueryString, getItems } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getEmployees = async (req, res) => {
  try {
    const query = await checkQueryString(req.query)
    res.status(200).json(await getItems(req, Employee, query))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getEmployees }
