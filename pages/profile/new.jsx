import React from 'react'
import styles from './new.module.scss'
import AppContainer from '../../containers/AppContainer'
import Button from '../../components/basic/Button'
import { signIn } from 'next-auth/react'
import Head from 'next/head'
import { PROJECT_NAME } from '../../constants'

const New = () => {
  const signInWithCallback = (provider) =>
    signIn(provider, { callbackUrl: '/cart' })

  return (
    <>
      <Head>
        <title>Авторизация — {PROJECT_NAME}</title>
      </Head>

      <AppContainer>
        <section className={styles.container}>
          <h2>Для продолжения вы должны войти или создать аккаунт</h2>

          <Button
            variant="primary"
            onClick={() => signInWithCallback('google')}
          >
            Войти через Google
          </Button>
          <Button
            variant="primary"
            onClick={() => signInWithCallback('facebook')}
          >
            Войти через Facebook
          </Button>
          <Button
            variant="primary"
            onClick={() => signInWithCallback('instagram')}
          >
            Войти через Instagram
          </Button>
        </section>
      </AppContainer>
    </>
  )
}

export default New
