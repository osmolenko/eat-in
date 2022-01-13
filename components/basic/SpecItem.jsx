import React from 'react'
import styles from './SpecItem.module.scss'

const SpecItem = ({ variant, type, data }) => {
  const isLarge = variant === 'l-primary' || variant === 'l-secondary'
  return (
    <div className={styles[variant]}>
      {!isLarge ? <b>{type}</b> : ''}
      <p>{data}</p>
    </div>
  )
}

export default SpecItem
