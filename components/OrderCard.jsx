import React, { useState } from 'react'
import styles from './OrderCard.module.scss'
import Chevron from '../icons/Chevron'
import { paymentMethods, timeIntervals } from '../constants'
import { findInArray } from '../utils/arrays'

const OrderCard = ({
  order: {
    pid,
    createdAt,
    summary,
    status,
    products,
    city,
    address,
    apt,
    payment,
    time,
  },
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.container}>
      <span className={styles.container__number}>Заказ {pid}</span>
      <span className={styles.container__sum}>{summary}₴</span>
      <span className={styles.container__date}>
        {new Date(createdAt).toLocaleString()}
      </span>
      <span className={styles.container__status}>
        {status === 0 ? 'В обработке' : `Выполнен`}
      </span>

      <div className={styles.container__more}>
        {expanded ? (
          <>
            <hr />

            {products &&
              products.map((product) => (
                <ul key={product._id} className={styles.container__more__item}>
                  <li className={styles.container__more__item__head}>
                    <span>
                      {product.quantity} x Набор {product.product.name}
                    </span>
                    <span>{product.product.price}₴</span>
                  </li>
                </ul>
              ))}

            <hr />

            <ul className={styles.container__more__info}>
              <li>
                <b>Адрес:</b> {city}, {address}, кв.{apt}
              </li>
              <li>
                <b>Оплата:</b> {findInArray(paymentMethods, payment)}
              </li>
              <li>
                <b>Время получения:</b> {findInArray(timeIntervals, time)}
              </li>
              <li>
                <b>Статус заказа:</b> Выполнен
              </li>
            </ul>
          </>
        ) : (
          ''
        )}
        <button
          className={styles.container__more__expand}
          onClick={() => setExpanded(!expanded)}
        >
          <Chevron style={expanded ? { transform: 'rotate(180deg)' } : {}} />
          {expanded ? 'Скрыть' : 'Узнать больше'}
        </button>
      </div>
    </div>
  )
}

export default OrderCard
