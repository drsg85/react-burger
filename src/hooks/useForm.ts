import { useState } from 'react'

type TUseFormReturn<T> = [
  T,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
]

export const useForm = <T>(initialForm: T): TUseFormReturn<T> => {
  const [form, setForm] = useState(initialForm)

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => setForm(initialForm)

  return [form, handleForm, resetForm]
}

export default useForm
