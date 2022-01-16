import React from 'react'
import styles from './index.module.scss'
import ProductCard from '../../components/ProductCard'

const Index = (props) => {
  console.log(props)
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

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Index
