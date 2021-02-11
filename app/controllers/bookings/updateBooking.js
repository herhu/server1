const Booking = require('../../models/booking')
const { updateItem } = require('../../middleware/db')
const { isIDGood, handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { bookingExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateBooking = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesBookingExists = await bookingExistsExcludingItself(id, req.name)
    if (!doesBookingExists) {
      res.status(200).json(await updateItem(id, Booking, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateBooking }
