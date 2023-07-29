import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd'
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

// Redux
import { setBun, setIngredient } from '../../redux/actions/constructorActions';
import { ingredientsListSelector, constructorSelector } from '../../redux/selectors';
import { setOrder } from '../../redux/actions/orderActions';

// Components
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

// Styles
import styles from './burgerConstructor.module.css';
import { BurgerItem } from './BurgerItem/BurgerItem';


const BurgerConstructor = () => {
    const dispatch = useDispatch();
    const ingredientsList = useSelector(ingredientsListSelector);
    const { bun, ingredients } = useSelector(constructorSelector);

    const bunsPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients ? ingredients.reduce((acc, inredient) => acc + inredient.price, 0) : 0;
    const totalPrice = bunsPrice + ingredientsPrice;

    const [{ isHover }, dropRef] = useDrop(() => ({
        accept: 'INGREDIENT',
        drop: ({ id }) => {
            dropIngredient(id)
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
    }))

    const dropIngredient = (id) => {
        const ingredient = ingredientsList?.find(el => el._id === id)

        if (ingredient) {
            ingredient.type === 'bun'
                ? dispatch(setBun(ingredient))
                : dispatch(setIngredient(ingredient))
        }
    }

    const [orderModal, setOrderModal] = useState(false);

    const fetchOrder = () => {
        if (bun && ingredients) {
            const bunId = bun._id;
            const ingredientsIds = ingredients.map((ingredient) => ingredient._id)
            dispatch(setOrder([bunId, ...ingredientsIds, bunId]))
            setOrderModal(true);
        }
    };

    const closeOrderModal = () => {
        setOrderModal(false);
    };

    // BurgerIngredients
    const burgerIngredients = ingredients?.map((ingredient, index) => (
        <BurgerItem key={ingredient.uuid} ingredient={ingredient} orderId={index} />
    ));

    return (
        <section className={`${styles.burgerConstructor} pt-25`}
            ref={dropRef}>
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

                <p className={`${styles.sum} text text_type_digits-medium pr-10`}>
                    {totalPrice}
                    <span className={`${styles.currencyIcon} ml-2`}>
                        <CurrencyIcon type='primary' />
                    </span>
                </p>

                <Button htmlType='button' type='primary' size='medium' onClick={fetchOrder}>
                    Оформить заказ
                </Button>
                {orderModal && (
                    <Modal onClose={closeOrderModal}>
                        <OrderDetails />
                    </Modal>
                )}
            </div>
        </section>
    )

};

export default BurgerConstructor;