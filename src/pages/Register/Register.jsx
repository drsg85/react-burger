import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Input,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

// redux
import { handleRegister } from '../../redux/actions/authActions'

// hooks
import useForm from '../../hooks/useForm'

// components
import AuthButtons from '../../components/AuthButtons/AuthButtons'

// styles
import styles from './register.module.css'

const Register = () => {
  const dispatch = useDispatch()

  //! Типизировать из файла types/requests
  const [form, handleForm] = useForm({
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(handleRegister(form))
  }

  return (
    <main className="content">
      <h2>Регистрация</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          name="password"
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
          path="/login"
        />
      </div>
    </main>
  )
}

export default Register
