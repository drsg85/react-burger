import AuthButtons from '../../components/AuthButtons/AuthButtons';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './resetPassword.module.css';

const ResetPassword = () => {
    return (
        <main className='content'>
            <h2>
                Восстановление пароля
            </h2>
            <form className={styles.form}>
                <PasswordInput
                    name={'password'}
                    placeholder="Введите новый пароль"
                    autoFocus
                />

                <Input
                    type="text"
                    placeholder="Введите код из письма"
                    name="name"
                    errorText="Ошибка"
                    size="default"
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