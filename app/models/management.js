const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ManagementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ManagementSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Management', ManagementSchema)
