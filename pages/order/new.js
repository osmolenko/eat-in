import React, { useEffect, useState } from 'react'
import styles from './new.module.scss'
import AppContainer from '../../containers/AppContainer'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Loader from '../../components/basic/Loader'
import useSWR from 'swr'
import ProductOrderCard from '../../components/ProductOrderCard'
import { useForm } from 'react-hook-form'
import TextInput from '../../components/basic/TextInput'
import SelectInput from '../../components/basic/SelectInput'
import { paymentMethods, PROJECT_NAME, timeIntervals } from '../../constants'
import Checkbox from '../../components/basic/Checkbox'
import Button from '../../components/basic/Button'
import Head from 'next/head'

const fetcher = (url) => fetch(url).then((res) => res.json())

const New = () => {
  const [summary, setSummary] = useState(0)
  const router = useRouter()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/profile/new')
    },
  })
  const { register, handleSubmit } = useForm()

  let id = '0'
  if (typeof window !== 'undefined') {
    id = localStorage.getItem('cart.id')
  }

  const { data, error } = useSWR(
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

  if (status === 'loading' || !data || error) return <Loader />

  if (!data.products.length) {
    ;(async () => await router.push('/cart'))()
  }

  const submit = async (formData) => {
    const pid = new Date().getTime().toString()

    const order = {
      email: session.user.email,
      name: session.user.name,
      cartId: id,
      ...formData,
      products: data.products,
      summary,
      phone: formData.phone.replaceAll(' ', ''),
      pid: pid,
    }

    const response = await fetch('/api/order/make-order', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status === 201) {
      await router.push(`/order/success?pid=${pid}`)
    } else {
      await router.push('/order/error')
    }
  }

  return (
    <>
      <Head>
        <title>Новый заказ — {PROJECT_NAME}</title>
      </Head>

      <AppContainer>
        <section className={styles.container}>
          <h2>Оформление заказа</h2>
          <ul>
            {data.products.map((product) => (
              <ProductOrderCard key={product._id} product={product} />
            ))}
          </ul>
          <hr />
          <h2>Ваши данные</h2>
          <form
            className={styles.container__form}
            onSubmit={handleSubmit(submit)}
          >
            <TextInput
              type="tel"
              name="phone"
              labelText="Номер телефона"
              {...register('phone')}
              required={true}
            />
            <TextInput
              type="text"
              name="city"
              labelText="Город"
              {...register('city')}
              required={true}
            />
            <TextInput
              type="text"
              name="address"
              labelText="Адрес"
              {...register('address')}
              required={true}
            />
            <TextInput
              type="text"
              name="apt"
              labelText="Квартира"
              {...register('apt')}
              required={true}
            />

            <SelectInput
              type="text"
              name="payment"
              labelText="Оплата"
              {...register(`payment`)}
              required={true}
              options={paymentMethods}
            />
            <SelectInput
              type="text"
              name="time"
              labelText="Время получения"
              {...register(`time`)}
              required={true}
              options={timeIntervals}
            />
            <Checkbox label="Приготовлю сам" {...register(`selfMade`)} />
            <Button variant="primary" type="submit">
              Оформить заказ ( {summary}₴ )
            </Button>
          </form>
        </section>
      </AppContainer>
    </>
  )
}

export default New
