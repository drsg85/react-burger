import { useNavigate } from 'react-router-dom';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

// utils
import { checkResponse } from '../../utils/getUrl';

// components
import AuthButtons from '../../components/AuthButtons/AuthButtons';

// hooks
import useForm from '../../hooks/useForm';

// styles
import styles from './forgotPassword.module.css';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [form, handleForm] = useForm({
        email: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        const headers = { 'Content-Type': 'application/json' }
        const body = JSON.stringify(form);

        fetch('https://norma.nomoreparties.space/api/password-reset', { method: 'POST', headers, body })
            .then(checkResponse)
            .then((res) => navigate('/reset-password'))
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
                <EmailInput
                    name="email"
                    placeholder="Укажите e-mail"
                    autoFocus
                    value={form.email}
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

export default ForgotPassword;