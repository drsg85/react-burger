import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

// Styles
import styles from './authbuttons.module.css'

export interface IAuthButtonsProps {
  title: string
  buttonName: string
  path: string
}

const AuthButtons: FC<IAuthButtonsProps> = ({ title, buttonName, path }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.authButtonsWrapper}>
      <p className={`${styles.title} text_color_inactive`}>{title}</p>

      <Button
        htmlType="button"
        type="secondary"
        size="large"
        extraClass={styles.button}
        onClick={() => navigate(path)}
      >
        {buttonName}
      </Button>
    </div>
  )
}

export default AuthButtons
