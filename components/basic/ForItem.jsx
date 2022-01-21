import React from 'react'
import styles from './ForItem.module.scss'
import { forVariants } from '../../constants'

const ForItem = ({ variant }) => {
  const forItem = forVariants[variant]

  return (
    <li className={styles.container}>
      {forItem.icon} {forItem.name}
    </li>
  )
}

export default ForItem
