import React from 'react'
import TextInput from '../../components/basic/TextInput'
import Button from '../../components/basic/Button'
import { useFieldArray, useForm } from 'react-hook-form'
import SelectInput from '../../components/basic/SelectInput'
import { forVariants } from '../../constants'
import Checkbox from '../../components/basic/Checkbox'

const AddProduct = ({ productItems }) => {
  const { control, register, handleSubmit } = useForm()

  const { fields, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'items', // unique name for your Field Array
    keyName: 'id', // default to "id", you can change the key name
  })

  const submit = async (form) => {
    console.log(form)

    await fetch('/api/products/create-product', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <TextInput
          type="text"
          name="name"
          labelText="Название"
          {...register('name')}
          required={true}
        />
        <TextInput
          type="text"
          name="price"
          labelText="Цена"
          {...register('price')}
          required={true}
        />
        <TextInput
          type="text"
          name="days"
          labelText="Рекомендовано дней"
          {...register('days')}
          required={true}
        />
        <TextInput
          type="text"
          name="description"
          labelText="Описание"
          {...register('description')}
          required={true}
        />

        {forVariants.map((variant) => {
          return (
            <Checkbox
              key={variant.id}
              label={variant.name}
              id={variant.id}
              {...register('forwhom')}
            />
          )
        })}

        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <TextInput
              type="text"
              name="variant"
              labelText="Тип приёма"
              {...register(`items.${index}.variant`)}
              required={true}
            />
            <SelectInput
              type="text"
              name="productItem"
              labelText="Элемент меню"
              {...register(`items.${index}.item`)}
              required={true}
              options={productItems}
              isMongo={true}
            />
          </fieldset>
        ))}

        <Button type="button" variant="primary" onClick={() => append({})}>
          Добавить поле
        </Button>

        <Button type="submit" variant="primary">
          Добавить
        </Button>
      </form>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products/get-items', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const productItems = await res.json()

  return {
    props: {
      productItems,
    },
  }
}

export default AddProduct
