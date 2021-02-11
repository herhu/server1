const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const EstablishmentSchema = new mongoose.Schema(
  {
    establishment: {
      type: String,
      required: true
    },
    quantityBed: {
      type: Number,
      required: true
    },
    numeration: {
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
