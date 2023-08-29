import { Link, NavLink } from 'react-router-dom'

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './appheader.module.css'
import { AppHeaderLink } from './AppHeaderLink/AppHeaderLink'

// сделать сетку
// сделать активными иконки

const AppHeader = () => {
  return (
    <header>
      <nav className={styles.headerNav}>
        <div className={styles.headerNavList}>
          <AppHeaderLink title="Конструктор" to="/" Icon={BurgerIcon} />
          <AppHeaderLink title="Лента заказов" to="/feed" Icon={ListIcon} />
        </div>

        <Link to="/">
          <Logo />
        </Link>

        <AppHeaderLink
          title="Личный кабинет"
          to="/profile"
          Icon={ProfileIcon}
        />
      </nav>
    </header>
  )
}

export default AppHeader
