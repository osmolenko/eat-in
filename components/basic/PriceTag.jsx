import React from 'react'
import styles from './PriceTag.module.scss'

const PriceTag = ({ children }) => {
  return (
    <span className={styles.container}>
      {children}₴<small>/день</small>
    </span>
  )
}

export default PriceTag
