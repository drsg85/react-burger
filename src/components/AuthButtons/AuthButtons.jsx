import { useNavigate } from 'react-router-dom'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

// Styles
import styles from './authbuttons.module.css'

const AuthButtons = ({ title, buttonName, path }) => {
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

AuthButtons.propTypes = {
  title: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default AuthButtons
