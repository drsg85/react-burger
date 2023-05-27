import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredients.module.css';

const BurgerIngredients = ({burgersData}) => {

    return (
        <section className={styles.burgerIngredients}>
            <ul className={styles.ingredientTabs}>
                <li>
                    <Tab>
                        Булки
                    </Tab>
                </li>
                <li>
                    <Tab>
                        Соусы
                    </Tab>
                </li>
                <li>
                    <Tab>
                        Начинки
                    </Tab>
                </li>
            </ul>
        </section>
    )
}

export default BurgerIngredients;