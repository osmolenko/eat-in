import mongoose from 'mongoose'
import Cart from '../../../../entities/Cart'
import Product from '../../../../entities/Product'

export default async function getHandler(req, res) {
  if (req.method === 'GET') {
    const { pid: productPid, id: cartPid } = req.query
    if (!productPid || !cartPid) res.status(422)

    await mongoose.connect(process.env.MONGODB_URI)

    const data = await Cart.findByPid(cartPid)
    const { _id } = await Product.findByPid(productPid)

    if (!data) {
      await Cart.create({ pid: cartPid, products: [{ product: _id }] })
    } else {
      data.products.push({ product: _id })
      await data.save()
    }

    res.status(200).json('data')
  }
}
