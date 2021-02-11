const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    rut: {
      type: String,
      required: true
    },
    sap: {
      type: Number,
      default: 0,
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
    notes: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
EmployeeSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Employee', EmployeeSchema)
