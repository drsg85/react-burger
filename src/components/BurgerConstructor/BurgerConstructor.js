import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgerConstructor.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useSelector, useDispatch } from 'react-redux';
import { constructorSelector } from '../../redux/selectors/constructorSelectors';
import { removeIngredient } from '../../redux/actions/constructorActions';


const BurgerConstructor = () => {
    const { ingredients, bun } = useSelector(constructorSelector);
    const dispatch = useDispatch();

    const bunsPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients ? ingredients.reduce((acc, inredient) => acc + inredient.price, 0) : 0;
    const totalPrice = bunsPrice + ingredientsPrice;

    const handleRemoveIngredient = (id) => {
        dispatch(removeIngredient(id));
    }

    const burgerIngredients = ingredients?.map((ingredient) => (
        <li key={ingredient.uuid}>
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => handleRemoveIngredient(ingredient.uuid)}
            />
        </li>
    ));

    const [orderModal, setOrderModal] = useState(false);


    const openOrderModal = () => {
        setOrderModal(true);
    };

    const closeOrderModal = () => {
        setOrderModal(false);
    };


    return (
        <section className={`${styles.burgerConstructor} pt-25`}>
            <div className={`${styles.content} mb-10`}>
                <div>
                    {bun ? (
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={bun.name}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    ) : (<h2>добавьте булку</h2>)}
                </div>
                <ul className={styles.constructorList}>
                    {burgerIngredients || <h2>добавьте ингредиенты</h2>}
                </ul>
                <div>
                    {bun ? (
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={bun.name}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    ) : (<h2>добавьте булку</h2>)}
                </div>
            </div>
            <div className={styles.result}>
                <p className={`${styles.sum} text text_type_digits-medium pr-10`}>{totalPrice}<span className={`${styles.currencyIcon} ml-2`}><CurrencyIcon type='primary' /></span></p>
                <Button htmlType='button' type='primary' size='medium' onClick={openOrderModal}>
                    Оформить заказ
                </Button>
                {orderModal && (
                    <Modal onClose={closeOrderModal}>
                        <OrderDetails orderNumber='034536' />
                    </Modal>
                )}
            </div>
        </section>
    )

};

export default BurgerConstructor;