import React from 'react'
import styles from './[pid].module.scss'
import PriceTag from '../../components/basic/PriceTag'
import Button from '../../components/basic/Button'
import SpecItem from '../../components/basic/SpecItem'
import ForItem from '../../components/basic/ForItem'
import ProductItemCard from '../../components/ProductItemCard'

const Product = ({
  product: {
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
  },
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.container__image}
        style={{
          backgroundImage: `url("/uploads/${photo}")`,
        }}
      >
        <PriceTag>{price}</PriceTag>
        <Button variant="primary-action">Купить</Button>
      </div>

      <section className={styles.container__content}>
        <h1 className={styles.container__content__heading}>{name}</h1>
        <p className={styles.container__content__desc}>{description}</p>

        <div className={styles.container__content__specs}>
          <SpecItem variant="l-primary" data={`${calories.toFixed(0)} ккал`} />
          <SpecItem variant="l-secondary" data={`${days.toFixed(0)} дней`} />
          <br />
          <br />
          <br />
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

        <div className={styles.container__content__for}>
          <h2>Для кого подходит?</h2>
          {forwhom.map((forItem) => (
            <ForItem key={forItem} variant={forItem - 1} />
          ))}
        </div>

        <div className={styles.container__content__items}>
          <h2>Что входит в меню?</h2>
          {items.map((item) => (
            <ProductItemCard key={item.pid} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Product

export async function getServerSideProps(context) {
  const { pid } = context.query

  const res = await fetch(`http://localhost:3000/api/products/${pid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const product = await res.json()

  return {
    props: {
      product: { ...product[0] },
    },
  }
}
