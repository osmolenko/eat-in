import mongoose from 'mongoose'
import Cart from '../../../entities/Cart'
import Product from '../../../entities/Product'

export default async function getHandler(req, res) {
  if (req.method === 'GET') {
    const { pid: productPid, id: cartPid, quantity } = req.query
    if (!productPid || !cartPid || !quantity) res.status(422)

    await mongoose.connect(process.env.MONGODB_URI)

    const cart = await Cart.findByPid(cartPid)

    if (!cart.products.length) res.status(400)

    const { _id } = await Product.findByPid(productPid)

    console.log(quantity)

    const isDelete = quantity <= 0

    cart.products.map(async (product) => {
      if (_id.toString() === product.product.toString()) {
        if (isDelete) {
          cart.products.pull({
            _id: product._id,
          })
        } else {
          product.quantity = quantity
        }
        await cart.save()
      }
    })

    res.status(200).json('data')
  }
}
