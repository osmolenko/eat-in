import React from 'react'
import TextInput from '../../components/basic/TextInput'
import Button from '../../components/basic/Button'
import styles from './auth.module.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationSchema = yup.object({
  tel: yup.string().required().length(17),
  password: yup.string().required().min(8),
})

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) })
  const onSubmit = (data) => console.log(data)

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.auth}>
        <TextInput
          type="tel"
          name="tel"
          labelText="Номер телефона"
          placeholder="Ваш номер телефона"
          {...register('tel')}
        />
        <p>{errors.tel?.message}</p>
        <TextInput
          className={styles.auth__pass}
          type="password"
          name="password"
          labelText="Пароль"
          placeholder="Ваш пароль"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <Button type="submit" variant="primary">
          Войти
        </Button>
      </div>

      <div className={styles.register}>
        <span className={styles.register__text}>Нет аккаунта?</span>
        <Button variant="secondary" href="profile/register">
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}

export default Auth
