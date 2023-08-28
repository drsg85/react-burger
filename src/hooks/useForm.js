import { useState } from 'react';

const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    const handleForm = (event) => {
        const { name, value } = event.target;

        setForm(prev => ({ ...prev, [name]: value }))
    }

    return [form, handleForm]
}

export default useForm;