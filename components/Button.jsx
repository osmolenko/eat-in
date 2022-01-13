import React from 'react'
import styles from './Button.module.scss'

const Button = React.forwardRef(function Button(inProps, ref) {
  const { variant, children } = inProps
  return (
    <button className={styles[variant]} ref={ref} {...inProps}>
      {children}
    </button>
  )
})

export default Button
