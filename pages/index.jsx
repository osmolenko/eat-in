import Head from 'next/head'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'
import { timeIntervals } from '../constants'
import Checkbox from '../components/Checkbox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TextInput type="password" name="password" labelText="Пароль" />
      <TextInput type="tel" name="tel" labelText="Номер телефона" />

      <SelectInput
        options={timeIntervals}
        name="time"
        labelText="Время получения"
      />
    </div>
  )
}