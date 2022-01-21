import React from 'react'
import styles from './ProductItemCard.module.scss'
import SpecItem from './basic/SpecItem'

const ProductItemCard = ({
  item: {
    variant,
    item: { name, photo, calories, fat, carbohydrates, protein },
  },
}) => {
  return (
    <div className={styles.container}>
      <h3>{variant}</h3>
      <div
        className={styles.container__image}
        style={{
          backgroundImage: `url("/uploads/${photo}")`,
        }}
      />
      <span>{name}</span>
      <ul className={styles.container__specs}>
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
  )
}

export default ProductItemCard
