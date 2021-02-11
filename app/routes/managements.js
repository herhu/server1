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
  getAllManagements,
  getManagements,
  createManagement,
  getManagement,
  updateManagement,
  deleteManagement
} = require('../controllers/managements')

const {
  validateCreateManagement,
  validateGetManagement,
  validateUpdateManagement,
  validateDeleteManagement
} = require('../controllers/managements/validators')

/*
 * Managements routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllManagements)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getManagements
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateManagement,
  createManagement
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetManagement,
  getManagement
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateManagement,
  updateManagement
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteManagement,
  deleteManagement
)

module.exports = router
