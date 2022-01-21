import React from 'react'
import dynamic from 'next/dynamic'

const CartNoSsr = dynamic(() => import('../../nossr/Cart'), { ssr: false })

const Cart = () => {
  return <CartNoSsr />
}

export default Cart
