import React from 'react'
import styles from './index.module.scss'
import OrderCard from '../../components/OrderCard'
import AppContainer from '../../containers/AppContainer'
import { useSession } from 'next-auth/react'
import Loader from '../../components/basic/Loader'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { PROJECT_NAME } from '../../constants'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Profile = () => {
  const router = useRouter()
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      if (typeof window !== 'undefined') {
        router.push('/profile/new')
      }
    },
  })

  const { data, error } = useSWR(
    `http://localhost:3000/api/order/get-orders`,
    fetcher
  )

  console.log(data)

  if (status === 'loading' || !data || error) return <Loader />

  return (
    <>
      <Head>
        <title>Профиль — {PROJECT_NAME}</title>
      </Head>

      <AppContainer>
        <section className={styles.container}>
          <h2 className={styles.container__heading}>Приветствуем,</h2>
          <h2 className={styles.container__name}>
            {session.user.name.split(' ')[0]}!
          </h2>

          <h3 className={styles.container__ordersheading}>Ваши заказы</h3>
          {data ? (
            data.map((order) => <OrderCard key={order.pid} order={order} />)
          ) : (
            <h2>Заказов пока нету =(</h2>
          )}
        </section>
      </AppContainer>
    </>
  )
}

export default Profile
