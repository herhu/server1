const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const BookingSchema = new mongoose.Schema(
  {
    bookingCode: {
      type: String,
      required: true
    },
    management: {
      type: String,
      required: false
    },
    company: {
      type: String,
      required: true
    },
    reservation: {
      type: Array,
      required: true
    },
    active: {
      type: Array,
      default: [],
      required: false
    },
    inactive: {
      type: Array,
      default: [],
      required: false
    },
    checkIn: {
      type: Date,
      required: true
    },
    checkOut: {
      type: Date,
      required: true
    },
    establishment: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
BookingSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('BookingSchema', BookingSchema)
