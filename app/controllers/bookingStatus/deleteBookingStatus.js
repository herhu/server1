const BookingStatus = require('../../models/bookingStatus')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { deleteItem } = require('../../middleware/db')

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteBookingStatus = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    res.status(200).json(await deleteItem(id, BookingStatus))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { deleteBookingStatus }
