import React from 'react'
import styles from './../404.module.scss'
import { useRouter } from 'next/router'
import Button from '../../components/basic/Button'
import IconSuccess from '../../icons/Success'
import AppContainer from '../../containers/AppContainer'
import Head from 'next/head'
import { PROJECT_NAME } from '../../constants'

const Success = () => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <>
      <Head>
        <title>Успешное оформление заказа — {PROJECT_NAME}</title>
      </Head>

      <AppContainer>
        <section className={styles.container}>
          <IconSuccess />
          <span>
            Ваш заказ в обработке!
            <br />
            <br />
            Его номер – {pid}.
            <br />
            <br />
            В случае возникновения каких-либо уточнений, которые вы не смогли
            указать в примечании позвоните по нашему номеру:
            <br />
            <br />
            <a href="tel:+380999999999">+380 (99) 999-99-99</a>
            <br />
            <br />В ближайшее время мы с вами свяжемся для уточнения деталей
            вашего заказа.
          </span>
          <Button variant="primary" onClick={() => router.push('/')}>
            Вернуться на главную
          </Button>
        </section>
      </AppContainer>
    </>
  )
}

export default Success
