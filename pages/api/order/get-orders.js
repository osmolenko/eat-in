import mongoose from 'mongoose'
import User from '../../../entities/User'
import Order from '../../../entities/Order'
import { getSession } from 'next-auth/react'

export default async function getHandler(req, res) {
  const session = await getSession({ req })
  if (req.method === 'GET' && session) {
    const { email } = session.user

    await mongoose.connect(process.env.MONGODB_URI)
    await User

    res.status(200).json(await Order.findAllByUserEmail(email))
  }
}
