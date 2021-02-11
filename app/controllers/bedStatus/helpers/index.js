const { bedStatusExists } = require('./bedStatusExists')
const {
  bedStatusExistsExcludingItself
} = require('./bedStatusExistsExcludingItself')
const { getAllItemsFromDB } = require('./getAllItemsFromDB')

module.exports = {
  bedStatusExists,
  bedStatusExistsExcludingItself,
  getAllItemsFromDB
}
