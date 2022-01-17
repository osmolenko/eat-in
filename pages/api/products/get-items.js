import mongoose from 'mongoose'
import ProductItem from '../../../entities/ProductItem'

export default async function getHandler(req, res) {
  if (req.method === 'GET') {
    await mongoose.connect(process.env.MONGODB_URI)
    const productItems = await ProductItem.find({})
    return res.status(201).send(productItems)
  }
}
