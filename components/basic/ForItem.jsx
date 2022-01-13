import React from 'react'
import styles from './ForItem.module.scss'
import { forVariants } from '../../constants'

const ForItem = ({ variant }) => {
  const forItem = forVariants[variant]

  return (
    <span className={styles.container}>
      {forItem.icon} {forItem.name}
    </span>
  )
}

export default ForItem
