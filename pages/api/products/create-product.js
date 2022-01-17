import mongoose from 'mongoose'
import Product from '../../../entities/Product'

export default async function postHandler(req, res) {
  if (req.method === 'POST') {
    await mongoose.connect(process.env.MONGODB_URI)
    await Product.create(req.body)
    return res.status(201).send('')
  }
}
