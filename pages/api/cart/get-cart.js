import mongoose from 'mongoose'
import Cart from '../../../entities/Cart'
import Product from '../../../entities/Product'

export default async function getHandler(req, res) {
  if (req.method === 'GET') {
    const { id: cartPid } = req.query
    if (!cartPid) res.status(422)

    await mongoose.connect(process.env.MONGODB_URI)
    await Product

    const data = await Cart.findByPid(cartPid).populate({
      path: 'products',
      populate: 'product',
    })

    if (!data) {
      await Cart.create({ pid: cartPid })
    }

    res.status(200).json(data)
  }
}
