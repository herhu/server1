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
  getAllCompanies,
  getCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany
} = require('../controllers/companies')

const {
  validateCreateCompany,
  validateGetCompany,
  validateUpdateCompany,
  validateDeleteCompany
} = require('../controllers/companies/validators')

/*
 * Companies routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllCompanies)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getCompanies
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateCompany,
  createCompany
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetCompany,
  getCompany
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateCompany,
  updateCompany
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteCompany,
  deleteCompany
)

module.exports = router
