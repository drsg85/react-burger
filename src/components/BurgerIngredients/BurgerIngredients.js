import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerIngredients.module.css';
import Ingredient from '../Ingredient/Ingredient';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useState } from 'react';
import PropTypes from 'prop-types';

const BurgerIngredients = ({burgersData}) => {
    const [ingredientDetailsModal, setingredientDetailsModal] = useState(null);

    const closeModal = () => {
        setingredientDetailsModal(null)
    };

    return (
        <>
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
                    {burgersData.map((burgersIngredient) => <Ingredient burgersData={burgersIngredient} key={burgersIngredient._id} onClick={() => setingredientDetailsModal(burgersIngredient)}/>)}
                </div>
            </section>
            {ingredientDetailsModal && (
                <Modal isOpen={ingredientDetailsModal} onClose={closeModal} title='Детали ингредиента'>
                    <IngredientDetails ingredient={ingredientDetailsModal} />
                </Modal>
            )}
        </>
    )
}

BurgerIngredients.propTypes = {
    burgersData: PropTypes.shape({
        price: PropTypes.string,
        name: PropTypes.string,
        image: PropTypes.string,
        _id: PropTypes.string,
        onClick: PropTypes.func,
        onClose: PropTypes.func,
    })
};

export default BurgerIngredients;