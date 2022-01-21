import mongoose from 'mongoose'
import User from './User'

const orderSchema = new mongoose.Schema({
  pid: String,
  phone: String,
  city: String,
  address: String,
  apt: String,
  payment: String,
  time: String,
  selfMade: Boolean,
  summary: Number,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  products: Object,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  status: {
    type: Number,
    default: 0,
  },
})

orderSchema.statics.findByPid = function (pid) {
  return this.findOne({ pid: new RegExp(pid, 'i') })
}

orderSchema.statics.findAllByUser = function (id) {
  return this.find({ user: new RegExp(id, 'i') })
}

orderSchema.statics.findAllByUserEmail = async function (email) {
  const user = await User.findByEmail(email)
  return this.find({ user: user._id })
}

export default mongoose.models.Order || mongoose.model('Order', orderSchema)
