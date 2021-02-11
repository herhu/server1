const Booking = require('../../models/booking')
const { createItem } = require('../../middleware/db')
const { handleError } = require('../../middleware/utils')
const { matchedData } = require('express-validator')
const { bookingExists } = require('./helpers')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createBooking = async (req, res) => {
  try {
    req = matchedData(req)
    const doesBookingExists = await bookingExists(req.code)
    if (!doesBookingExists) {
      res.status(201).json(await createItem(req, Booking))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createBooking }
