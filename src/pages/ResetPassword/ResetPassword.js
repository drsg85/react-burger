import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

// hooks
import useForm from '../../hooks/useForm';

// utils
import { checkResponse } from '../../utils/getUrl';
// components

import AuthButtons from '../../components/AuthButtons/AuthButtons';

// styles
import styles from './resetPassword.module.css';

const ResetPassword = () => {
    const [form, handleForm] = useForm({
        password: "",
        token: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify(form);

        fetch('https://norma.nomoreparties.space/api/password-reset/reset', { method: 'POST', headers, body })
            .then(checkResponse)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    }


    return (
        <main className='content'>
            <h2>
                Восстановление пароля
            </h2>
            <form className={styles.form}
                onSubmit={handleSubmit}
            >
                <PasswordInput
                    name='password'
                    placeholder="Введите новый пароль"
                    autoFocus
                    value={form.password}
                    onChange={handleForm}
                />

                <Input
                    type="text"
                    placeholder="Введите код из письма"
                    name="token"
                    errorText="Ошибка"
                    size="default"
                    value={form.token}
                    onChange={handleForm}
                />

                <Button htmlType="submit" type="primary" size="large">
                    Восстановить
                </Button>
            </form>
            <div className="auth__links">
                <AuthButtons
                    title="Вспомнили пароль?"
                    buttonName="Войти"
                    path='/login'
                />
            </div>
        </main>

    )
}

export default ResetPassword;