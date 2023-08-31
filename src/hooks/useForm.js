import { useState } from 'react'

const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm)

  const handleForm = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => setForm(initialForm)

  return [form, handleForm, resetForm]
}

export default useForm
