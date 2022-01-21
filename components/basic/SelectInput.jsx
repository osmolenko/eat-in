import React from 'react'
import styles from './SelectInput.module.scss'

const SelectInput = React.forwardRef(function SelectInput(inProps, ref) {
  const { options, name, labelText, isMongo } = inProps
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <div className={styles.container}>
        <select name={name} id={name} ref={ref} {...inProps}>
          {options.map((option) => {
            const id = isMongo ? option._id : option.id
            return (
              <option key={id} value={id}>
                {option.name}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
})

export default SelectInput
