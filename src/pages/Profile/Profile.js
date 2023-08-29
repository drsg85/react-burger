import { NavLink, Outlet } from 'react-router-dom'

import styles from './profile.module.css'

// переделать кнопку выход

const Profile = () => {
  return (
    <main className={styles.container}>
      <aside className={styles.asideWrapper}>
        <div className={styles.asideButtons}>
          <NavLink
            className={({ isActive }) => {
              return `${styles.profileLink} text text_type_main-default ${
                isActive ? styles.active : 'text_color_inactive'
              }`
            }}
            to="/profile"
            end
          >
            Профиль
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return `${styles.profileLink} text text_type_main-default ${
                isActive ? styles.active : 'text_color_inactive'
              }`
            }}
            to="/profile/orders"
            end
          >
            История заказов
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return `${styles.profileLink} text text_type_main-default ${
                isActive ? styles.active : 'text_color_inactive'
              }`
            }}
          >
            Выход
          </NavLink>
        </div>
        <p className={styles.asideInfo}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </aside>
      <Outlet />
    </main>
  )
}

export default Profile
