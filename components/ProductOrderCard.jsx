import React from 'react'
import styles from './ProductOrderCard.module.scss'

const ProductOrderCard = React.forwardRef(function ProductOrderCard(
  inProps,
  ref
) {
  const { variant, product } = inProps
  return (
    <li className={styles.container}>
      <span className={styles.container__name}>
        <b>Набор {product.product.name}</b>
      </span>
      <span className={styles.container__perday}>
        {product.product.price}₴<small>/день</small>
      </span>
      {variant === 'input' ? (
        <input
          type="number"
          className={styles.container__counter}
          ref={ref}
          {...inProps}
          defaultValue={product.quantity || 1}
          min={0}
          max={30}
        />
      ) : (
        <span className={styles.container__counter}>
          {product.quantity} день
        </span>
      )}
      <span className={styles.container__price}>
        <b>{product.product.price * product.quantity}₴</b>
      </span>
    </li>
  )
})

export default ProductOrderCard
