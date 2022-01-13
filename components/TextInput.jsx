import React, { useState } from 'react'
import styles from './TextInput.module.scss'
import Eye from '../icons/Eye'
import EyeOff from '../icons/EyeOff'
import InputMask from 'react-input-mask'

const TextInput = React.forwardRef(function TextInput(inProps, ref) {
  const { type, name, labelText, className } = inProps
  const [showPassword, setShowPassword] = useState(true)
  const showEye = type === 'password' && showPassword

  const props = () => ({ ...inProps, className: '' })

  const PasswordToggle = () => {
    return showEye ? (
      <Eye onClick={() => setShowPassword(!showPassword)} />
    ) : (
      <EyeOff onClick={() => setShowPassword(!showPassword)} />
    )
  }

  return (
    <div className={className}>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <div className={styles.container}>
        {type === 'tel' ? (
          <InputMask
            mask="+999 99 999 99 99"
            name={name}
            id={name}
            {...props()}
            ref={ref}
          />
        ) : (
          <input
            name={name}
            id={name}
            {...props()}
            ref={ref}
            type={showEye ? 'password' : 'text'}
          />
        )}

        {type === 'password' ? <PasswordToggle /> : ''}
      </div>
    </div>
  )
})

export default TextInput
