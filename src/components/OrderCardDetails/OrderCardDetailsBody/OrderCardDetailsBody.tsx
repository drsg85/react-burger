import { FC } from 'react'
import { IWSOrder } from 'redux/actions/webSocket'

import { useIngredientsByIds } from 'hooks/useIngredientsByIds'

import PriceCard from 'components/PriceCard/PriceCard'
import { OrderStatus } from 'components/OrderCard/OrderCard'
import OrderRow from '../OrderRow/OrderRow'

import { dateConverter } from 'utils/dateConvert'

import styles from './orderCardDetailsBody.module.css'

export interface IOrderCardDetailsBodyProps {
  order: IWSOrder
}

export const OrderCardDetailsBody: FC<IOrderCardDetailsBodyProps> = ({
  order,
}) => {
  const date = dateConverter(order.createdAt)

  // Ingredients
  const currentIngredients = useIngredientsByIds(order.ingredients)

  const ingredientsList = [...new Set(currentIngredients)].map(ingredient => {
    const count =
      ingredient.type === 'bun'
        ? 2
        : currentIngredients?.filter(el => el._id === ingredient._id).length

    return (
      <OrderRow
        count={count || 0}
        ingredient={ingredient}
        key={ingredient._id}
      />
    )
  })

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{order.name}</h3>

      <p className={styles.status}>{OrderStatus[order.status]}</p>

      <h3 className={styles.composition}>Состав:</h3>

      <ul className={styles.ingredients}>{ingredientsList}</ul>

      <div className={styles.footer}>
        <span className={styles.timing}>{date}</span>

        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </div>
  )
}

export default OrderCardDetailsBody
