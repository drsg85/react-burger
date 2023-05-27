import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredients.module.css';
import Ingredient from '../Ingredient/Ingredient';

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
            <div className={styles.content}>
                {burgersData.map((burgersIngredient) => <Ingredient burgersData={burgersIngredient} />)}
            </div>
        </section>
    )
}

export default BurgerIngredients;