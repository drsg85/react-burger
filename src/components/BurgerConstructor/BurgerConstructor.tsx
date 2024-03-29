import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDrop } from 'react-dnd'
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import { setOrder, setBun, setIngredient } from 'redux/actions'
import {
  authSelector,
  ingredientsListSelector,
  constructorSelector,
} from 'redux/selectors'

// Components
import Modal from '../Modal/Modal'
import OrderDetails from '../OrderDetails/OrderDetails'

// Nested components
import BurgerItem from './BurgerItem/BurgerItem'

// Styles
import styles from './burgerConstructor.module.css'

const BurgerConstructor = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useSelector(authSelector)
  const ingredientsList = useSelector(ingredientsListSelector)
  const { bun, ingredients } = useSelector(constructorSelector)

  const bunsPrice = bun ? bun.price * 2 : 0
  const ingredientsPrice = ingredients
    ? ingredients.reduce((acc, inredient) => acc + inredient.price, 0)
    : 0
  const totalPrice = bunsPrice + ingredientsPrice

  const [{ isHover }, dropRef] = useDrop(() => ({
    accept: 'INGREDIENT',
    drop: ({ id }: { id: string }) => {
      dropIngredient(id)
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }))

  const dropIngredient = (id: string) => {
    const ingredient = ingredientsList?.find((el) => el._id === id)

    if (ingredient) {
      ingredient.type === 'bun'
        ? dispatch(setBun(ingredient))
        : dispatch(setIngredient(ingredient))
    }
  }

  const fetchOrder = () => {
    if (!user) {
      navigate('/login')
      return
    }
    if (bun && ingredients) {
      const bunId = bun._id
      const ingredientsIds = ingredients.map((ingredient) => ingredient._id)
      dispatch(setOrder([bunId, ...ingredientsIds, bunId]))
      navigate('/order-details', {
        state: { background: location },
      })
    }
  }

  // BurgerIngredients
  const burgerIngredients = ingredients?.map((ingredient, index) => (
    <BurgerItem key={ingredient.uuid} ingredient={ingredient} orderId={index} />
  ))

  return (
    <section className={`${styles.burgerConstructor} pt-25`} ref={dropRef}>
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
          ) : (
            <h2>добавьте булку</h2>
          )}
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
          ) : (
            <h2>добавьте булку</h2>
          )}
        </div>
      </div>
      <div className={styles.result}>
        <p className={`${styles.sum} text text_type_digits-medium pr-10`}>
          {totalPrice}
          <span className={`${styles.currencyIcon} ml-2`}>
            <CurrencyIcon type="primary" />
          </span>
        </p>

        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={fetchOrder}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor
