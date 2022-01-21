import React from 'react'
import styles from './404.module.scss'
import { useRouter } from 'next/router'
import Button from '../components/basic/Button'
import Icon404 from '../icons/404'
import Head from 'next/head'
import { PROJECT_NAME } from '../constants'
import AppContainer from '../containers/AppContainer'

const Custom404 = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Не найдено — {PROJECT_NAME}</title>
      </Head>

      <AppContainer>
        <section className={styles.container}>
          <Icon404 />
          <span>
            Похоже, вы попали не туда, куда нужно =(
            <br />
            <br />
            Если вы уверены, что ошибки быть не должно, свяжитесь с нами для
            уточнения вопрос по нашему номеру телефона:
            <br />
            <br />
            <a href="tel:+380999999999">+380 (99) 999-99-99</a>
          </span>
          <Button variant="primary" onClick={() => router.push('/')}>
            Вернуться на главную
          </Button>
        </section>
      </AppContainer>
    </>
  )
}

export default Custom404
