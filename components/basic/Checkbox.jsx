import React from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = React.forwardRef(function Checkbox(inProps, ref) {
  const { label, id } = inProps
  return (
    <div className={styles.container}>
      <input
        {...inProps}
        ref={ref}
        type="checkbox"
        className={styles.container__checkbox}
        value={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
})

export default Checkbox
