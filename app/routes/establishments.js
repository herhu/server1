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
  getAllEstablishments,
  getEstablishments,
  createEstablishment,
  getEstablishment,
  updateEstablishment,
  deleteEstablishment,
  updateBedStatus
} = require('../controllers/establishments')

const {
  validateCreateEstablishment,
  validateGetEstablishment,
  validateUpdateEstablishment,
  validateDeleteEstablishment,
  validateUpdatedBedStatus
} = require('../controllers/establishments/validators')

/*
 * establishments routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllEstablishments)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getEstablishments
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateEstablishment,
  createEstablishment
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetEstablishment,
  getEstablishment
)
/*
 * Update bed status route
 */
router.patch(
  '/updateBedStatus',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdatedBedStatus,
  updateBedStatus
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateEstablishment,
  updateEstablishment
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteEstablishment,
  deleteEstablishment
)

module.exports = router
