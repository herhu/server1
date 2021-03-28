const { itemNotFound } = require('../../middleware/utils')

/**
 * Updates the bed status  in database
 * @param {Object} req - request object
 */
const updateStatus = (model = {}, req = {}) => {
  return new Promise((resolve, reject) => {
    model.updateOne(
      { code: req.code }, // query
      {
        $set: { 'distribution.$[f].rooms.$[r].beds.$[b].status': req.status }
      }, // update
      {
        arrayFilters: [
          { 'f.floor': parseInt(req.floor) },
          { 'r.number': parseInt(req.room) },
          { 'b.number': parseInt(req.bed) }
        ],
        new: true
      },
      async (err, item) => {
        try {
          await itemNotFound(err, item, 'NOT_FOUND')
          resolve(item)
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

module.exports = { updateStatus }
