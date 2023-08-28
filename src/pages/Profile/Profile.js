import { NavLink, Outlet } from 'react-router-dom'

import styles from './profile.module.css';

const Profile = () => {
    return (
        <main className={styles.container}>
            <aside className={styles.asideWrapper}>
                <div className={styles.asideButtons}>
                    <NavLink className={`${styles.profileLink} text text_type_main-default`} to='/profile' end>
                        Профиль
                    </NavLink>

                    <NavLink className={`${styles.profileLink} text text_type_main-default`} to='/profile/orders' end>
                        История заказов
                    </NavLink>

                    <NavLink className={`${styles.profileLink} text text_type_main-default`} >
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

export default Profile;