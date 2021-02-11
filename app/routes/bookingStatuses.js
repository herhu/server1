const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const {
  getAllBookingStatuses,
  getBookingStatuses,
  createBookingStatus,
  getBookingStatus,
  updateBookingStatus,
  deleteBookingStatus
} = require('../controllers/bookingStatuses')

const {
  validateCreateBookingStatus,
  validateGetBookingStatus,
  validateUpdateBookingStatus,
  validateDeleteBookingStatus
} = require('../controllers/bookingStatuses/validators')

/*
 * bookingStatuses routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllBookingStatuses)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getBookingStatuses
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateBookingStatus,
  createBookingStatus
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetBookingStatus,
  getBookingStatus
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateBookingStatus,
  updateBookingStatus
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteBookingStatus,
  deleteBookingStatus
)

module.exports = router
