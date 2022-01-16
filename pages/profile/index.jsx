import React from 'react'
import styles from './index.module.scss'
import OrderCard from '../../components/OrderCard'

const Profile = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__heading}>Приветствуем,</h2>
      <h2 className={styles.container__name}>Валерий!</h2>

      <h3 className={styles.container__ordersheading}>Ваши заказы</h3>
      <OrderCard />
      <OrderCard />
    </div>
  )
}

export default Profile
