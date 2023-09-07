import { Link } from 'react-router-dom'
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Components
import { AppHeaderLink } from './AppHeaderLink/AppHeaderLink'

// Styles
import styles from './appheader.module.css'

const AppHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <div className={styles.headerNavList}>
          <AppHeaderLink to="/" title="Конструктор" Icon={BurgerIcon} />
          <AppHeaderLink to="/feed" title="Лента заказов" Icon={ListIcon} />
        </div>

        <Link to="/">
          <Logo />
        </Link>

        <AppHeaderLink
          to="/profile"
          title="Личный кабинет"
          Icon={ProfileIcon}
        />
      </nav>
    </header>
  )
}

export default AppHeader
