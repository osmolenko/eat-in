import mongoose from 'mongoose'
import sendTelegramNotification from '../../../lib/telegraf'
import User from '../../../entities/User'
import Order from '../../../entities/Order'
import Cart from '../../../entities/Cart'
import { getSession } from 'next-auth/react'

export default async function postHandler(req, res) {
  const session = await getSession({ req })
  if (req.method === 'POST' && session) {
    await mongoose.connect(process.env.MONGODB_URI)
    const order = req.body
    const user = await User.findByEmail(order.email)

    await Order.create({ ...order, user: user })
    await Cart.deleteByPid(order.cartId)
    await sendTelegramNotification(req.body)

    return res.status(201).end()
  }
}
