import AuthButtons from '../../components/AuthButtons/AuthButtons';
import { Button, Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register.module.css';

const Register = () => {
    return (
        <main className='content'>
            <h2>
                Регистрация
            </h2>
            <form className={styles.form}>
                <Input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    errorText="Ошибка"
                    size="default"
                    autoFocus
                />

                <EmailInput
                    name="email"
                    placeholder="E-mail"
                />

                <PasswordInput
                    name={'password'}
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