import React from 'react'
import Head from 'next/head'
import styles from './[pid].module.scss'
import PriceTag from '../../components/basic/PriceTag'
import Button from '../../components/basic/Button'
import SpecItem from '../../components/basic/SpecItem'
import ForItem from '../../components/basic/ForItem'
import ProductItemCard from '../../components/ProductItemCard'
import AppContainer from '../../containers/AppContainer'
import mongoose from 'mongoose'
import Product from '../../entities/Product'
import { useRouter } from 'next/router'
import { PROJECT_NAME } from '../../constants'

const ProductPage = (props) => {
  const {
    pid,
    name,
    description,
    photo,
    price,
    days,
    forwhom,
    calories,
    fat,
    carbohydrates,
    protein,
    items,
  } = JSON.parse(props.product)

  const router = useRouter()

  async function handleAddToCart() {
    let id = 0
    if (typeof window !== 'undefined') {
      id = localStorage.getItem('cart.id')
    }
    await fetch(`/api/cart/add/${pid}?id=${id}`, {
      method: 'GET',
    })
    await router.push('/cart')
  }

  return (
    <>
      <Head>
        <title>
          Набор {name} — {PROJECT_NAME}
        </title>
      </Head>

      <AppContainer className={styles.container}>
        <div
          className={styles.container__image}
          style={{
            backgroundImage: `url("/uploads/${photo}")`,
          }}
        >
          <PriceTag>{price}</PriceTag>
          <Button variant="primary-action" onClick={handleAddToCart}>
            Купить
          </Button>
        </div>

        <section className={styles.container__content}>
          <h1 className={styles.container__content__heading}>{name}</h1>
          <p className={styles.container__content__desc}>{description}</p>

          <ul className={styles.container__content__specs}>
            <div>
              <SpecItem
                variant="l-primary"
                data={`${calories.toFixed(0)} ккал`}
              />
              <SpecItem
                variant="l-secondary"
                data={`${days.toFixed(0)} дней`}
              />
            </div>
            <div>
              <SpecItem
                variant="s-primary"
                type="Жиры"
                data={`${fat.toFixed(1)} г.`}
              />
              <SpecItem
                variant="s-primary"
                type="Углеводы"
                data={`${carbohydrates.toFixed(1)} г.`}
              />
              <SpecItem
                variant="s-primary"
                type="Белки"
                data={`${protein.toFixed(1)} г.`}
              />
            </div>
          </ul>

          <div className={styles.container__content__for}>
            <h2>Для кого подходит?</h2>
            <ul>
              {forwhom.map((forItem, index) => (
                <ForItem key={forItem + index} variant={forItem - 1} />
              ))}
            </ul>
          </div>

          <div className={styles.container__content__items}>
            <h2>Что входит в меню?</h2>
            {items.map((item) => (
              <ProductItemCard key={item.pid} item={item} />
            ))}
          </div>
        </section>
      </AppContainer>
    </>
  )
}

export default ProductPage

export async function getServerSideProps(context) {
  const { pid } = context.query

  await mongoose.connect(process.env.MONGODB_URI)
  const product = await Product.findByPid(pid).populate({
    path: 'items',
    populate: { path: 'item' },
  })

  return {
    props: {
      product: JSON.stringify(product),
    },
  }
}
