const { employeeExists } = require('./employeeExists')
const {
  employeeExistsExcludingItself
} = require('./employeeExistsExcludingItself')
const { getAllItemsFromDB } = require('./getAllItemsFromDB')

module.exports = {
  employeeExists,
  employeeExistsExcludingItself,
  getAllItemsFromDB
}
