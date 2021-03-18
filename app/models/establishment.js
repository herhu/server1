const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const EstablishmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    distribution: {
      type: Array,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
EstablishmentSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Establishment', EstablishmentSchema)
