import React from 'react'
import styles from './SelectInput.module.scss'

const SelectInput = React.forwardRef(function SelectInput(inProps, ref) {
  const { options, name, labelText } = inProps
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <div className={styles.container}>
        <select name={name} id={name} ref={ref} {...inProps}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )
})

export default SelectInput
