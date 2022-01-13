import React, { useState } from 'react'
import styles from './TextInput.module.scss'
import Eye from '../icons/Eye'
import EyeOff from '../icons/EyeOff'

const TextInput = React.forwardRef(function TextInput(inProps, ref) {
  const { type, name, labelText } = inProps
  const [showPassword, setShowPassword] = useState(true)
  const showEye = type === 'password' && showPassword

  const PasswordToggle = () => {
    return showEye ? (
      <Eye onClick={() => setShowPassword(!showPassword)} />
    ) : (
      <EyeOff onClick={() => setShowPassword(!showPassword)} />
    )
  }

  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <div className={styles.container}>
        <input
          name={name}
          id={name}
          {...inProps}
          ref={ref}
          type={showEye ? 'password' : 'text'}
        />
        {type === 'password' ? <PasswordToggle /> : ''}
      </div>
    </>
  )
})

export default TextInput
