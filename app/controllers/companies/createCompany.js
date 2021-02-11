const Company = require('../../models/company')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { companyExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createCompany = async (req, res) => {
  try {
    req = matchedData(req)
    const doesCompanyExists = await companyExists(req.name)
    if (!doesCompanyExists) {
      res.status(201).json(await createItem(req, Company))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createCompany }
