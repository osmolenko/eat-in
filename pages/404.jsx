import React from 'react'
import styles from './404.module.scss'
import { useRouter } from 'next/router'
import Button from '../components/basic/Button'
import Icon404 from '../icons/404'

const Custom404 = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Custom404
