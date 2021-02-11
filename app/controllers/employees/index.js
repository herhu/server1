const { createEmployee } = require('./createEmployee')
const { deleteEmployee } = require('./deleteEmployee')
const { getAllEmployees } = require('./getAllEmployees')
const { getEmployee } = require('./getEmployee')
const { getEmployees } = require('./getEmployees')
const { updateEmployee } = require('./updateEmployee')

module.exports = {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployee,
  getEmployees,
  updateEmployee
}
