const BookingStatus = require('../../models/bookingStatus')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { bookingStatusExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateBookingStatus = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesBookingStatusExists = await bookingStatusExistsExcludingItself(
      id,
      req.status
    )
    if (!doesBookingStatusExists) {
      res.status(200).json(await updateItem(id, BookingStatus, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateBookingStatus }
