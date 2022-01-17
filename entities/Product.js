import mongoose from 'mongoose'
import Product from '../pages/products/[pid]'
import ProductItem from './ProductItem'

const numberType = {
  type: Number,
  default: 0,
}

const productSchema = new mongoose.Schema({
  pid: {
    type: String,
    immutable: true,
    default: () => new Date().getTime().toString(),
  },
  name: String,
  available: {
    type: Boolean,
    default: true,
  },
  photo: {
    type: String,
    default: ' ',
  },
  price: Number,
  description: String,
  days: Number,
  forwhom: [Number],
  items: [
    {
      variant: String,
      item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'ProductItem',
      },
    },
  ],
  calories: numberType,
  fat: numberType,
  carbohydrates: numberType,
  protein: numberType,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
})

productSchema.pre('save', async function (next) {
  const mainImageSelectorIndex = Math.round(
    Math.random() * this.items.length - 1
  )

  for (let i = 0; i < this.items.length; i++) {
    const item = await ProductItem.findById(this.items[i].item)
    this.calories += item.calories
    this.fat += item.fat
    this.carbohydrates += item.carbohydrates
    this.protein += item.protein
    if (i === mainImageSelectorIndex) {
      this.photo = item.photo
    }
  }

  next()
})

productSchema.statics.findByPid = function (pid) {
  return this.where({ pid: new RegExp(pid, 'i') })
}

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema)
