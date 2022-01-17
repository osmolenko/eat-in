import React from 'react'
import styles from './AppContainer.module.scss'
import Link from 'next/link'
import Shop from '../icons/Shop'
import Cart from '../icons/Cart'
import Profile from '../icons/Profile'

const AppContainer = ({ children }) => {
  return (
    <>
      <main className={styles.content}>{children}</main>
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
