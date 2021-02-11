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
  getAllBedStatuses,
  getBedStatuses,
  createBedStatus,
  getBedStatus,
  updateBedStatus,
  deleteBedStatus
} = require('../controllers/bedStatuses')

const {
  validateCreateBedStatus,
  validateGetBedStatus,
  validateUpdateBedStatus,
  validateDeleteBedStatus
} = require('../controllers/bedStatuses/validators')

/*
 * bedStatuses routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllBedStatuses)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getBedStatuses
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateBedStatus,
  createBedStatus
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetBedStatus,
  getBedStatus
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateBedStatus,
  updateBedStatus
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteBedStatus,
  deleteBedStatus
)

module.exports = router
