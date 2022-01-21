import React from 'react'
import styles from './ProductCard.module.scss'
import Button from './basic/Button'
import PriceTag from './basic/PriceTag'
import ForItem from './basic/ForItem'
import SpecItem from './basic/SpecItem'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProductCard = ({
  product: {
    pid,
    name,
    photo,
    price,
    forwhom,
    calories,
    fat,
    carbohydrates,
    protein,
  },
}) => {
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
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("/uploads/${photo}")`,
        }}
      >
        <PriceTag>{price}</PriceTag>
      </div>
      <h2 className={styles.container__name}>{name}</h2>
      <div className={styles.container__specs}>
        <span className={styles.container__specs__heading}>Подходит для:</span>
        <ul>
          {forwhom.map((item) => (
            <ForItem key={item} variant={item - 1} />
          ))}
        </ul>

        <ul className={styles.container__specs__cards}>
          <SpecItem
            variant="m-primary"
            type="Ценность"
            data={`${calories.toFixed(0)} ккал`}
          />
          <SpecItem
            variant="m-primary"
            type="Жиры"
            data={`${fat.toFixed(1)} г.`}
          />
          <SpecItem
            variant="m-secondary"
            type="Углеводы"
            data={`${carbohydrates.toFixed(1)} г.`}
          />
          <SpecItem
            variant="m-secondary"
            type="Белки"
            data={`${protein.toFixed(1)} г.`}
          />
        </ul>
      </div>

      <div className={styles.container__actions}>
        <Link href={`/products/${pid}`}>
          <a>Подробнее</a>
        </Link>
        <Button onClick={handleAddToCart} variant="primary-action">
          Купить
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
