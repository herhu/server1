const { handleError } = require('../../middleware/utils')
const { getAllEstablishmentsFromDB } = require('./helpers')

/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAllEstablishments = async (req, res) => {
  try {
    res.status(200).json(await getAllEstablishmentsFromDB())
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getAllEstablishments }
