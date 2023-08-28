import { useNavigate } from 'react-router-dom';
import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

// utils
import { checkResponse } from '../../utils/getUrl';

// hooks
import useForm from '../../hooks/useForm';

// components
import AuthButtons from '../../components/AuthButtons/AuthButtons';

// styles
import styles from './register.module.css';

const Register = () => {
    const navigate = useNavigate();

    const [form, handleForm] = useForm({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify(form);

        fetch('https://norma.nomoreparties.space/api/auth/register', { method: 'POST', headers, body })
            .then(checkResponse)
            .then((res) => navigate('/'))
            .catch((error) => console.log(error))
    }

    return (
        <main className='content'>
            <h2>
                Регистрация
            </h2>
            <form className={styles.form}
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    errorText="Ошибка"
                    size="default"
                    autoFocus
                    value={form.name}
                    onChange={handleForm}
                />

                <EmailInput
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                />

                <PasswordInput
                    name='password'
                    value={form.password}
                    onChange={handleForm}
                />

                <Button htmlType="submit" type="primary" size="large">
                    Зарегистрироваться
                </Button>
            </form>
            <div className="auth__links">
                <AuthButtons
                    title="Уже зарегистрированы?"
                    buttonName="Войти"
                    path='/login'
                />
            </div>
        </main>
    )
}

export default Register;