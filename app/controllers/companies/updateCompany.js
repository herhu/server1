const Company = require('../../models/company')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { companyExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateCompany = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesCompanyExists = await companyExistsExcludingItself(id, req.name)
    if (!doesCompanyExists) {
      res.status(200).json(await updateItem(id, Company, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateCompany }
