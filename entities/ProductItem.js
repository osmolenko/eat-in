import mongoose from 'mongoose'

const stringType = {
  type: String,
  required: true,
}

const numberType = {
  type: Number,
  required: true,
}

export const productItemSchema = new mongoose.Schema({
  pid: stringType,
  name: stringType,
  photo: stringType,
  calories: numberType,
  fat: numberType,
  carbohydrates: numberType,
  protein: numberType,
})

productItemSchema.statics.findByPid = function (pid) {
  return this.where({ pid: new RegExp(pid, 'i') })
}

export default mongoose.models.ProductItem ||
  mongoose.model('ProductItem', productItemSchema)
