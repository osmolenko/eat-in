import React from 'react'
import styles from './ProductOrderCard.module.scss'

const ProductOrderCard = React.forwardRef(function ProductOrderCard(
  inProps,
  ref
) {
  const { variant } = inProps
  return (
    <div className={styles.container} ref={ref}>
      <span className={styles.container__name}>
        <b>Набор СлимFit</b>
      </span>
      <span className={styles.container__perday}>
        599₴
        <small>/день</small>
      </span>
      {variant === 'input' ? (
        <input
          type="number"
          className={styles.container__counter}
          {...inProps}
          defaultValue={1}
          min={1}
          max={30}
        />
      ) : (
        <span className={styles.container__counter}>1 день</span>
      )}
      <span className={styles.container__price}>
        <b>599₴</b>
      </span>
    </div>
  )
})

export default ProductOrderCard
