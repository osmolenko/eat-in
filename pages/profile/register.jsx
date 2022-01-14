import React from 'react'
import TextInput from '../../components/basic/TextInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './register.module.scss'
import Button from '../../components/basic/Button'

const validationSchema = yup.object({
  name: yup.string().required().min(2),
  tel: yup.string().required().length(17),
  password: yup.string().required().min(8),
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <TextInput
        type="text"
        name="name"
        labelText="Имя"
        placeholder="Ваше имя"
        {...register('name')}
      />
      <TextInput
        type="tel"
        name="tel"
        labelText="Номер телефона"
        placeholder="Ваш номер телефона"
        {...register('tel')}
      />
      <TextInput
        type="password"
        name="password"
        labelText="Пароль"
        placeholder="Ваш пароль"
        {...register('password')}
      />

      <Button variant="secondary">Зарегистрироваться</Button>
    </form>
  )
}

export default Register
