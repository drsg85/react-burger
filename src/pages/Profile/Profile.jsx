import { useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

// redux
import { handleLogout } from '../../redux/actions/authActions'

// styles
import styles from './profile.module.css'

const Profile = () => {
  const dispatch = useDispatch()

  const onCliclLogout = () => {
    dispatch(handleLogout())
  }

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

          <button
            onClick={onCliclLogout}
            className={`${styles.profileLink} text text_type_main-default text_color_inactive`}
          >
            Выход
          </button>
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
