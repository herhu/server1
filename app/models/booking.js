const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const BookingSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true
    },
    employeeName: {
      type: String,
      required: true
    },
    employeeRut: {
      type: Number,
      default: 0,
      required: true
    },
    sap: {
      type: Number,
      required: true
    },
    management: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    bedNumber: {
      type: String,
      required: true
    },
    checkIn: {
      type: Date,
      required: true
    },
    checkOut: {
      type: Date,
      required: true
    },
    Establishment: {
      type: String,
      required: true
    },
    bookingStatus: {
      type: String,
      required: true
    },
    Notes: {
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
