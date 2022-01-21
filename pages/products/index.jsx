import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../components/ProductCard'
import AppContainer from '../../containers/AppContainer'
import mongoose from 'mongoose'
import Product from '../../entities/Product'
import Head from 'next/head'
import { PROJECT_NAME } from '../../constants'

const Index = (props) => {
  const products = JSON.parse(props.products)
  return (
    <>
      <Head>
        <title>Наши наборы — {PROJECT_NAME}</title>
      </Head>

      <AppContainer>
        <section className={styles.container}>
          <h1>Наши наборы</h1>
          {products
            ? products.map((product) => (
                <ProductCard key={product.pid} product={product} />
              ))
            : 'Пока продуктов нету =('}
        </section>
      </AppContainer>
    </>
  )
}

export async function getServerSideProps() {
  await mongoose.connect(process.env.MONGODB_URI)
  const products = await Product.find().select(
    'pid photo name price forwhom calories fat carbohydrates protein'
  )

  return {
    props: {
      products: JSON.stringify(products),
    },
  }
}

export default Index
