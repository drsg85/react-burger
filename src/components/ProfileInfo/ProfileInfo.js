import {
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './profileInfo.module.css'

const ProfileInfo = () => {
  return (
    <form className={styles.container}>
      <Input
        type="text"
        placeholder="Имя"
        name="name"
        errorText="Ошибка"
        size="default"
        icon="EditIcon"
      />

      <EmailInput name="email" placeholder="E-mail" />

      <PasswordInput name={'password'} icon="EditIcon" />
    </form>
  )
}

export default ProfileInfo
