import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__loader}></div>
    </div>
  )
}

export default Loader
