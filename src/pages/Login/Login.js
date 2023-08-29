import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import AuthButtons from '../../components/AuthButtons/AuthButtons'
import styles from './login.module.css'

const Login = () => {
  return (
    <main className="content">
      <h2>Вход</h2>
      <form className={styles.form}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          // value='email'
        />
        <PasswordInput
        // value='password'
        />
        <Button htmlType="submit" type="primary" size="large">
          Войти
        </Button>
      </form>
      <div className="">
        <AuthButtons
          title="Вы — новый пользователь?"
          buttonName="Зарегистрироваться"
          path="/register"
        />
        <AuthButtons
          title="Забыли пароль?"
          buttonName="Восстановить пароль"
          path="/forgot-password"
        />
      </div>
    </main>
  )
}

export default Login
