import React from 'react'
import styles from './ProductCard.module.scss'
import Button from './basic/Button'
import PriceTag from './basic/PriceTag'
import ForItem from './basic/ForItem'
import SpecItem from './basic/SpecItem'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{
          backgroundImage:
            'url("https://yaro.ua/assets/cache_image/img-2284_0x0_6f7.webp")',
        }}
      >
        <PriceTag>599</PriceTag>
      </div>
      <h2 className={styles.container__name}>СлимFit</h2>
      <div className={styles.container__specs}>
        <span className={styles.container__specs__heading}>Подходит для:</span>
        <ForItem variant={0} />
        <ForItem variant={1} />
        <ForItem variant={2} />

        <div className={styles.container__specs__cards}>
          <SpecItem variant="m-primary" type="Ценность" data="1400 ккал." />
          <SpecItem variant="m-primary" type="Жиры" data="5,7 г." />
          <SpecItem variant="m-secondary" type="Углеводы" data="5,7 г." />
          <SpecItem variant="m-secondary" type="Белки" data="5,7 г." />
        </div>
      </div>

      <div className={styles.container__actions}>
        <Link href="/product">
          <a>Подробнее</a>
        </Link>
        <Button variant="primary-action">Купить</Button>
      </div>
    </div>
  )
}

export default ProductCard
