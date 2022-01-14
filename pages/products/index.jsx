import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../components/ProductCard'

const Index = () => {
  return (
    <section className={styles.container}>
      <h1>Новинки</h1>
      <ProductCard />
      <h1>Наше питание</h1>
      <ProductCard />
      <ProductCard />
    </section>
  )
}

export default Index
