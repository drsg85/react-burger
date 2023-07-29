import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { ingredientsSelector } from '../../redux/selectors/ingredientsSelectors';
import { setIngredientDetails } from '../../redux/actions/ingredientDetailsAction';

// Components
import Ingredient from '../Ingredient/Ingredient';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

// Styles
import styles from './burgerIngredients.module.css';


const BurgerIngredients = () => {
    const [isModalActive, setisModalActive] = useState(false);
    const { ingredients } = useSelector(ingredientsSelector);
    const dispatch = useDispatch();

    const onOpenModal = (ingredient) => {
        dispatch(setIngredientDetails(ingredient));
        setisModalActive(true);
    }

    const closeModal = () => {
        setisModalActive(false)
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
                {ingredients.filter((ingredient) => ingredient.type === category.type).map((ingredient) => (
                    <li key={uuidv4()}>
                        <Ingredient burgersData={ingredient} onClick={() => onOpenModal(ingredient)} />
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
            {isModalActive && (
                <Modal isOpen={isModalActive} onClose={closeModal} title='Детали ингредиента'>
                    <IngredientDetails />
                </Modal>
            )}
        </>
    )
}

export default BurgerIngredients;