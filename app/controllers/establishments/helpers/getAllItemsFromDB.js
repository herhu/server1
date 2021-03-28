const Establishment = require('../../../models/establishment')
const { buildErrObject } = require('../../../middleware/utils')

/**
 * Gets all items from database
 */
const getAllEstablishmentsFromDB = () => {
  return new Promise((resolve, reject) => {
    Establishment.find(
      {},
      '-updatedAt -createdAt',
      {
        sort: {
          establishment: 1
        }
      },
      (err, items) => {
        if (err) {
          return reject(buildErrObject(422, err.message))
        }
        resolve(items)
      }
    )
  })
}

module.exports = { getAllEstablishmentsFromDB }
