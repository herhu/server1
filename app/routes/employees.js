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
  getAllEmployees,
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/Employees')

const {
  validateCreateEmployee,
  validateGetEmployee,
  validateUpdateEmployee,
  validateDeleteEmployee
} = require('../controllers/employees/validators')

/*
 * Employees routes
 */

/*
 * Get all items route
 */
router.get('/all', getAllEmployees)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  getEmployees
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateCreateEmployee,
  createEmployee
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateGetEmployee,
  getEmployee
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateUpdateEmployee,
  updateEmployee
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  roleAuthorization(['admin']),
  trimRequest.all,
  validateDeleteEmployee,
  deleteEmployee
)

module.exports = router
