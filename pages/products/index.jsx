import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../components/ProductCard'

const Index = ({ products }) => {
  return (
    <section className={styles.container}>
      <h1>Новинки</h1>
      {products
        ? products.map((product) => (
            <ProductCard key={product.pid} product={product} />
          ))
        : 'Пока продуктов нету =('}
    </section>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}

export default Index
