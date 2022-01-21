import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../components/ProductCard'
import AppContainer from '../../containers/AppContainer'
import mongoose from 'mongoose'
import Product from '../../entities/Product'

const Index = (props) => {
  const products = JSON.parse(props.products)
  return (
    <AppContainer>
      <section className={styles.container}>
        <h1>Новинки</h1>
        {products
          ? products.map((product) => (
              <ProductCard key={product.pid} product={product} />
            ))
          : 'Пока продуктов нету =('}
      </section>
    </AppContainer>
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
