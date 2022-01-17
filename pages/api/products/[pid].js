import mongoose from 'mongoose'
import Product from '../../../entities/Product'

export default async function getHandler(req, res) {
  if (req.method === 'GET') {
    const { pid } = req.query
    await mongoose.connect(process.env.MONGODB_URI)
    try {
      const data = await Product.findByPid(pid).populate({
        path: 'items',
        populate: { path: 'item' },
      })
      res.status(200).json(data)
    } catch (e) {
      console.log(e)
    }
  }
}
