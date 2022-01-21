import React, { useEffect, useState } from 'react'
import styles from './AppContainer.module.scss'
import Link from 'next/link'
import Shop from '../icons/Shop'
import Cart from '../icons/Cart'
import Profile from '../icons/Profile'
import { useRouter } from 'next/router'
import Loader from '../components/basic/Loader'

const AppContainer = ({ children }) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true)
    const handleComplete = (url) => url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <>
      {loading && <Loader />}

      <main
        style={loading ? { overflow: 'hidden', height: '100vh' } : {}}
        className={styles.content}
      >
        {children}
      </main>
      <footer>
        <nav className={styles.footer}>
          <ul className={styles.footer__container}>
            <li>
              <Link href="/products">
                <a className={styles.footer__link}>
                  <Shop className={styles.footer__link__icon} />
                  <span>Продукты</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/cart">
                <a className={styles.footer__link}>
                  <Cart className={styles.footer__link__icon} />
                  <span>Корзина</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/profile">
                <a className={styles.footer__link}>
                  <Profile className={styles.footer__link__icon} />
                  <span>Профиль</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default AppContainer
