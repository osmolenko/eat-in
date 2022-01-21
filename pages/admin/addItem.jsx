import React from 'react'
import TextInput from '../../components/basic/TextInput'
import { useForm } from 'react-hook-form'
import Button from '../../components/basic/Button'

const AddItem = () => {
  const { register, handleSubmit } = useForm()

  const submit = async (data) => {
    let formData = new FormData()

    for (const name in data) {
      formData.append(name, data[name])
    }
    formData.set('image', data.image[0])

    await fetch('/api/products/create-item', {
      method: 'POST',
      body: formData,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="file"
          name="image"
          {...register('image')}
          multiple={false}
          accept="image/*"
          required={true}
        />
        <TextInput
          type="text"
          name="name"
          labelText="Название"
          {...register('name')}
          required={true}
        />
        <TextInput
          type="text"
          name="calories"
          labelText="Калории"
          {...register('calories')}
          required={true}
        />
        <TextInput
          type="text"
          name="protein"
          labelText="Белки"
          {...register('protein')}
          required={true}
        />
        <TextInput
          type="text"
          name="fat"
          labelText="Жиры"
          {...register('fat')}
          required={true}
        />
        <TextInput
          type="text"
          name="carbohydrates"
          labelText="Углеводы"
          {...register('carbohydrates')}
          required={true}
        />

        <Button type="submit" variant="primary">
          Добавить
        </Button>
      </form>
    </>
  )
}

export default AddItem
