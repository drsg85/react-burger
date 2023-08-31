import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Hooks
import useForm from '../../hooks/useForm'

// styles
import styles from './profileInfo.module.css'
import { handleSetUser } from '../../redux/actions/authActions'

const ProfileInfo = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.auth.user)

  const initialForm = {
    name: user ? user.name : '',
    email: user?.email || '',
    password: '',
  }

  const [form, handleForm, resetForm] = useForm(initialForm)

  // isFormEdited
  const isFormEdited = JSON.stringify(initialForm) !== JSON.stringify(form)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(handleSetUser(form))
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Имя"
        name="name"
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
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
        icon="EditIcon"
        value={form.password}
        onChange={handleForm}
      />

      {isFormEdited && (
        <div className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={resetForm}
          >
            Отмена
          </Button>

          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  )
}

export default ProfileInfo
