import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
  pid: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  products: [
    {
      product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
})

cartSchema.statics.findByPid = function (pid) {
  return this.findOne({ pid: new RegExp(pid, 'i') })
}

cartSchema.statics.deleteByPid = function (pid) {
  return this.deleteOne({ pid: new RegExp(pid, 'i') })
}

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema)
