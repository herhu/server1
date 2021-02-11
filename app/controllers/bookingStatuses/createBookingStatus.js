const BookingStatus = require('../../models/bookingStatus')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { bookingStatusExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createBookingStatus = async (req, res) => {
  try {
    req = matchedData(req)
    const doesBookingStatusExists = await bookingStatusExists(req.code)
    if (!doesBookingStatusExists) {
      res.status(201).json(await createItem(req, BookingStatus))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createBookingStatus }
