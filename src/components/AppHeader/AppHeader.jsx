import { Link } from 'react-router-dom'

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './appheader.module.css'
import { AppHeaderLink } from './AppHeaderLink/AppHeaderLink'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <div className={styles.headerNavList}>
          <AppHeaderLink
            className={styles.headerLink}
            title="Конструктор"
            to="/"
            Icon={BurgerIcon}
          />
          <AppHeaderLink
            className={styles.headerLink}
            title="Лента заказов"
            to="/feed"
            Icon={ListIcon}
          />
        </div>

        <Link to="/">
          <Logo />
        </Link>

        <AppHeaderLink
          className={styles.headerLink}
          title="Личный кабинет"
          to="/profile"
          Icon={ProfileIcon}
        />
      </nav>
    </header>
  )
}

export default AppHeader
