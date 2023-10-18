import React from 'react'
import { useDrag } from 'react-dnd'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector } from 'redux/store'
import { constructorSelector } from 'redux/selectors'

// Types and utils
import { IIngredient } from 'types'

// Styles
import styles from '../Ingredient/ingredient.module.css'

export interface IIngredientProps {
  burgersData: IIngredient
  onClick: (burgersData: IIngredient) => void
}


const Ingredient: React.FC<IIngredientProps> = ({ burgersData, onClick }) => {
  const { image, price, name, _id } = burgersData
  
  const { bun, ingredients } = useSelector(constructorSelector)

  const openClick = () => {
    onClick(burgersData)
  }

  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag(() => ({
    type: 'INGREDIENT',
    item: { id: _id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const countValue = count()

  function count(): number {
    if(burgersData.type === 'bun') {
      return burgersData._id === bun?._id ? 2 : 0
    } else {
      if (!ingredients) return 0
      
      return ingredients.filter((ingredient) => ingredient._id === burgersData._id).length
    }

  }

  return (
    <li
      className={`${styles.ingredient} mb-8`}
      onClick={openClick}
      ref={dragRef}
      // isDragging
    >
      <img
        className={`${styles.image} mb-2`}
        src={`${image}`}
        alt={name}
        ref={dragPreviewRef}
      />
      <p className={`${styles.price} mb-2 text text_type_digits-default`}>
        {price}
        <span className={`${styles.currancy}`}>
          <CurrencyIcon type="primary" />
        </span>
      </p>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
      <span className={styles.counter}>
        {Boolean(countValue) && <Counter count={countValue} size="default" extraClass="m-1" />}
      </span>
    </li>
  )
}

export default Ingredient
