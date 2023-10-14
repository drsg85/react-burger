import React from 'react'

// Redux
import { IIngredient } from 'types'

// Components
import IngredientIcon from 'components/IngredientIcon/IngredientIcon'
import PriceCard from 'components/PriceCard/PriceCard'

// Styles
import styles from './orderRow.module.css'

interface IOrderRow {
  ingredient: IIngredient
  count: number
}

const OrderRow: React.FC<IOrderRow> = ({ ingredient, count }) => {
  return (
    <li className={styles.wrapper}>
      <IngredientIcon image={ingredient.image_mobile} />
      <p className={styles.title}>{ingredient.name}</p>
      <PriceCard size="small" prefix={count} price={ingredient.price} />
    </li>
  )
}

export default OrderRow