import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

// utils
import { checkResponse } from '../../utils/getUrl';

// components
import AuthButtons from '../../components/AuthButtons/AuthButtons';

// styles
import styles from './forgotPassword.module.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const body = JSON.stringify({ email });

        fetch('https://norma.nomoreparties.space/api/password-reset', { method: 'POST', body })
            .then((res) => checkResponse(res))
            .then((res) => navigate('/reset-password'))
            .catch((error) => console.log(error))
    }

    const handleInput = (event) => {
        setEmail(event.target.value);
    }

    return (
        <main className='content'>
            <h2>
                Восстановление пароля
            </h2>
            <form className={styles.form}
                onSubmit={handleSubmit}
            >
                <EmailInput
                    name="email"
                    placeholder="Укажите e-mail"
                    autoFocus
                    value={email}
                    onChange={handleInput}
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

export default ForgotPassword;