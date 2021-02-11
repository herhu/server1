const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const BookingStatusSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    descInventory: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
BookingStatusSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('BookingStatus', BookingStatusSchema)
