const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates update item request
 */

const validateUpdateBookingStatus = [
  check('status')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('code')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('descInventory')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateUpdateBookingStatus }
