const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const BedStatusSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    color: {
      type: Number,
      default: 0,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
BedStatusSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('BedStatus', BedStatusSchema)
