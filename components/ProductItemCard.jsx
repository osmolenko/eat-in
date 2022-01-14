import React from 'react'
import styles from './ProductItemCard.module.scss'
import SpecItem from './basic/SpecItem'

const ProductItemCard = () => {
  return (
    <div className={styles.container}>
      <h3>Завтрак</h3>
      <div
        className={styles.container__image}
        style={{
          backgroundImage:
            'url("https://yaro.ua/assets/cache_image/img-2284_0x0_6f7.webp")',
        }}
      />
      <span>Глазунья, булгур, льняные флаксы с хумусом</span>
      <div className={styles.container__specs}>
        <SpecItem variant="m-primary" type="Ценность" data="1400 ккал" />
        <SpecItem variant="m-primary" type="Жиры" data="5,7 г." />
        <SpecItem variant="m-secondary" type="Углеводы" data="5,7 г." />
        <SpecItem variant="m-secondary" type="Белки" data="5,7 г." />
      </div>
    </div>
  )
}

export default ProductItemCard
