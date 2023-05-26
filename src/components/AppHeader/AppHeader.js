import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './appheader.module.css';

function AppHeader() {
    return (
        <header>
            <nav className={styles.headernav}>
                <ul className={styles.navlist}>
                    <li className={`${styles.navlistitem} mr-2 pt-2 pr-5 pb-2 pl-5`}>
                        <BurgerIcon type="primary"/>
                        <a className={`${styles.navlink} text text_type_main-default text_color_primary ml-2`} href="#">Конструктор</a>
                    </li>
                    <li className={`${styles.navlistitem} mr-2 pt-2 pr-5 pb-2 pl-5`}>
                        <ListIcon type="secondary"/>
                        <a className={`${styles.navlink} text text_type_main-default ml-2 text_color_inactive`} href="#">Лента заказаов</a>
                    </li>
                </ul>
                <a href="№"><Logo /></a>
                <ul className={styles.navlist}>
                    <li className={`${styles.navlistitem} mr-2 pt-2 pr-5 pb-2 pl-5`}>
                        <ProfileIcon type="secondary" />
                        <a className={`${styles.navlink} text text_type_main-default ml-2 text_color_inactive`} href="#">Личный кабинет</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;