import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredients.module.css';
import Ingredient from '../Ingredient/Ingredient';

const BurgerIngredients = ({burgersData}) => {

    return (
        <section className={`${styles.burgerIngredients} pt-10`}>
            <h1 className={`${styles.title} mb-5 text text_type_main-large`}>Соберите бургер</h1>
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
            <div className={`${styles.content} custom-scroll`}>
                {burgersData.map((burgersIngredient) => <Ingredient burgersData={burgersIngredient} />)}
            </div>
        </section>
    )
}

export default BurgerIngredients;