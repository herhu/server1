const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    management: {
      type: String,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
CompanySchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Company', CompanySchema)
