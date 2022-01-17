import mongoose from 'mongoose'
import Product from '../../../entities/Product'

export default async function getHandler(req, res) {
  if (req.method === 'GET') {
    await mongoose.connect(process.env.MONGODB_URI)
    try {
      const data = await Product.find().select(
        'pid photo name price forwhom calories fat carbohydrates protein'
      )
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
    }
  }
}
