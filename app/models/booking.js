const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const BookingSchema = new mongoose.Schema(
  {
    bookingCode: {
      type: String,
      required: true
    },
    employeeName: {
      type: String,
      required: false
    },
    employeeRut: {
      type: Number,
      default: 0,
      required: false
    },
    sap: {
      type: Number,
      required: false
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
      required: false
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
BookingSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('BookingSchema', BookingSchema)
