import React from 'react'
import styles from './../404.module.scss'
import { useRouter } from 'next/router'
import Button from '../../components/basic/Button'
import IconError from '../../icons/Error'
import AppContainer from '../../containers/AppContainer'

const Error = () => {
  const router = useRouter()
  return (
    <AppContainer>
      <section className={styles.container}>
        <IconError />
        <span>
          Что-то пошло не так с оформлением вашего заказа...
          <br />
          <br />
          Не переживайте, ваша корзина осталась в целости и невредимости =)
          <br />
          <br />
          Повторите попытку позже или свяжитесь с нами для уточнения вопрос по
          нашему номеру телефона:
          <br />
          <br />
          <a href="tel:+380999999999">+380 (99) 999-99-99</a>
        </span>
        <Button variant="primary" onClick={() => router.push('/')}>
          Вернуться на главную
        </Button>
      </section>
    </AppContainer>
  )
}

export default Error
