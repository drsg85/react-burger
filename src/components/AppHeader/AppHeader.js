import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './appheader.module.css';

const AppHeader = () => {
    return (
        <header>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li className={`${styles.navListItem} mr-2 pt-2 pr-5 pb-2 pl-5`}>
                        <a className={`${styles.navLink} text text_type_main-default text_color_primary ml-2`} href="#"><BurgerIcon type="primary"/>Конструктор</a>
                    </li>
                    <li className={`${styles.navListItem} mr-2 pt-2 pr-5 pb-2 pl-5`}>
                        <a className={`${styles.navLink} text text_type_main-default ml-2 text_color_inactive`} href="#"><ListIcon type="secondary"/>Лента заказаов</a>
                    </li>
                </ul>
                <a href="№"><Logo /></a>
                <ul className={styles.headerNavList}>
                    <li className={`${styles.navListItem} mr-2 pt-2 pr-5 pb-2 pl-5`}>
                        <a className={`${styles.navLink} text text_type_main-default ml-2 text_color_inactive`} href="#"><ProfileIcon type="secondary" />Личный кабинет</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;