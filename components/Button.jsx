import React from 'react'
import styles from './Button.module.scss'

const Button = React.forwardRef(function Button(inProps, ref) {
  const { variant, children } = inProps
  const props = () => ({ ...inProps, className: '' })

  return (
    <button className={styles[variant]} ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button
