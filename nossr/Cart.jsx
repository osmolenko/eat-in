import React, { useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import useSWR from 'swr'
import Loader from '../components/basic/Loader'
import ProductOrderCard from '../components/ProductOrderCard'
import Button from '../components/basic/Button'
import AppContainer from '../containers/AppContainer'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { PROJECT_NAME } from '../constants'

const fetcher = (url) => fetch(url).then((res) => res.json())

const CartNoSsr = () => {
  const [summary, setSummary] = useState(0)
  const router = useRouter()
  let id = '0'

  if (typeof window !== 'undefined') {
    id = localStorage.getItem('cart.id')
  }

  const { data, error, mutate } = useSWR(
    `http://localhost:3000/api/cart/get-cart?id=${id}`,
    fetcher
  )

  useEffect(() => {
    let sum = 0

    if (data) {
      data.products.map((product) => {
        sum += product.quantity * product.product.price
      })
    }

    setSummary(sum)
  }, [data])

  if (!data || error) return <Loader />

  console.log(data)

  const handleChange = async (event, pid) => {
    await fetch(
      `http://localhost:3000/api/cart/modify-product?id=${id}&pid=${pid}&quantity=${event.target.value}`
    )
    await mutate()
  }

  return (
    <>
      <Head>
        <title>Корзина — {PROJECT_NAME}</title>
      </Head>

      <AppContainer>
        <section className={styles.container}>
          <h2>Корзина</h2>

          <ul className={styles.container__products}>
            {data.products.map((product) => (
              <ProductOrderCard
                key={product._id}
                variant="input"
                product={product}
                onChange={(event) => handleChange(event, product.product.pid)}
              />
            ))}
          </ul>

          <Button
            type="submit"
            variant="primary"
            onClick={() => router.push('/order/new')}
          >
            Заказать ( {summary}₴ )
          </Button>
        </section>
      </AppContainer>
    </>
  )
}

export default CartNoSsr
