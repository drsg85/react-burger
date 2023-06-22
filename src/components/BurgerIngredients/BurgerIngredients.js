import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredients.module.css';
import Ingredient from '../Ingredient/Ingredient';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { ingredientsSelector } from '../../redux/selectors/ingredientsSelectors';
import { Link } from 'react-scroll';


const BurgerIngredients = () => {
    const [ingredientDetailsModal, setingredientDetailsModal] = useState(null);
    const { ingredients } = useSelector(ingredientsSelector);

    const closeModal = () => {
        setingredientDetailsModal(null)
    };

    // Tab
    const inredientCategories = [
        {
            title: 'Булки',
            type: 'bun',
        },

        {
            title: 'Соусы',
            type: 'sauce',
        },

        {
            title: 'Начинки',
            type: 'main',
        },
    ]

    const [activeTab, setActiveTab] = useState(inredientCategories[0].type);

    const tabs = inredientCategories.map((tab) => (
        <li key={tab.type}>
            <Link
                key={tab.type}
                to={`category-${tab.type}`}
                spy={true}
                smooth={true}
                duration={700}
                offset={-20}
                containerId="ingredients"
                onSetActive={() => setActiveTab(tab.type)}
            >
                <Tab active={activeTab === tab.type} value={tab.type}>{tab.title}</Tab>
            </Link>
        </li >
    ))

    // Categories
    const categories = inredientCategories.map((category) => (
        <li key={category.type} id={`category-${category.type}`}>
            <h2>{category.title}</h2>
            <ul className={styles.listContainer}>
                {ingredients.filter((ingredient) => ingredient.type === category.type).map((ingredient, index) => (
                    <li key={index}>
                        <Ingredient burgersData={ingredient} onClick={() => setingredientDetailsModal(ingredient)} />
                    </li>
                ))}
            </ul>
        </li>
    ))

    return (
        <>
            <section className={`${styles.burgerIngredients} pt-10`}>
                <h1 className={`${styles.title} mb-5 text text_type_main-large`}>Соберите бургер</h1>
                <ul className={styles.ingredientTabs}>
                    {tabs}
                </ul>
                <ul className={`${styles.content} custom-scroll`} id='ingredients'>
                    {categories}
                </ul>
            </section>
            {ingredientDetailsModal && (
                <Modal isOpen={ingredientDetailsModal} onClose={closeModal} title='Детали ингредиента'>
                    <IngredientDetails ingredient={ingredientDetailsModal} />
                </Modal>
            )}
        </>
    )
}

export default BurgerIngredients;