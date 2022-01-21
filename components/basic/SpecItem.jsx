import React from 'react'
import styles from './SpecItem.module.scss'

const SpecItem = ({ variant, type, data }) => {
  const isLarge = variant === 'l-primary' || variant === 'l-secondary'
  return (
    <li className={styles[variant]}>
      {!isLarge ? <b>{type}</b> : ''}
      <p>{data}</p>
    </li>
  )
}

export default SpecItem
