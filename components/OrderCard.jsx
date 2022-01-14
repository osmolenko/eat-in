import React, { useState } from 'react'
import styles from './OrderCard.module.scss'
import Chevron from '../icons/Chevron'

const OrderCard = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.container}>
      <span className={styles.container__number}>Заказ 321451</span>
      <span className={styles.container__sum}>1797₴</span>
      <span className={styles.container__date}>12 января 2022 15:45</span>
      <span className={styles.container__status}>В обработке</span>

      <div className={styles.container__more}>
        {expanded ? (
          <>
            <hr />

            <div className={styles.container__more__item}>
              <div className={styles.container__more__item__head}>
                <span>Набор SlimFit</span>
                <span>1797₴</span>
              </div>
              <div className={styles.container__more__item__product}>
                <span>Глазунья, булгур, льяныне флаксы с хумусом</span>
                <span>3 шт.</span>
              </div>
              <div className={styles.container__more__item__product}>
                <span>Ризотто с овощами</span>
                <span>3 шт.</span>
              </div>
            </div>

            <hr />

            <div className={styles.container__more__info}>
              <span>
                <b>Адрес:</b> г.Киев, ул. Крещатик, 36, кв.9
              </span>
              <span>
                <b>Оплата:</b> При получении
              </span>
              <span>
                <b>Время получения:</b> 9:00 - 10:00
              </span>
              <span>
                <b>Статус заказа:</b> Выполнен
              </span>
            </div>
          </>
        ) : (
          ''
        )}

        <button
          className={styles.container__more__expand}
          onClick={() => setExpanded(!expanded)}
        >
          <Chevron />
          {expanded ? 'Скрыть' : 'Узнать больше'}
        </button>
      </div>
    </div>
  )
}

export default OrderCard
