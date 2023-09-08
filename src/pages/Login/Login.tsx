import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// redux
import { useDispatch } from 'redux/store'

import { handleLogin } from '../../redux/actions/authActions'

// components
import AuthButtons from '../../components/AuthButtons/AuthButtons'

// hooks
import useForm from '../../hooks/useForm'

// styles
import styles from './login.module.css'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const [form, handleForm] = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    dispatch(handleLogin(form))
  }

  return (
    <main className="content">
      <h2>Вход</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleForm}
        />

        <PasswordInput
          name="password"
          value={form.password}
          onChange={handleForm}
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
