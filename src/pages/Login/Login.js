import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { useNavigate } from 'react-router-dom'

// components
import AuthButtons from '../../components/AuthButtons/AuthButtons'

// hooks
import useForm from '../../hooks/useForm'

// styles
import styles from './login.module.css'
import { checkResponse } from '../../utils/getUrl'

const Login = () => {
  const navigate = useNavigate()

  const [form, handleForm] = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(form)

    fetch('https://norma.nomoreparties.space/api/auth/login', {
      method: 'POST',
      headers,
      body,
    })
      .then(checkResponse)
      .then((res) => navigate('/'))
      .catch((error) => console.log(error))
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
