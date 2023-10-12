import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Redux
import { IWSOrder } from 'redux/actions/webSocket'

// Utils
import { dateConverter } from 'utils/dateConvert'

// Hooks
import { useIngredientsByIds } from 'hooks/useIngredientsByIds'

// Components
import IngredientsList from 'components/IngredientsList/IngredientsList'
import PriceCard from 'components/PriceCard/PriceCard'

// Styles
import styles from './orderCard.module.css'

interface IOrderCard {
  order: IWSOrder
  isStatusShown: boolean
  modalPath: string
}

export enum OrderStatus {
  created = 'Создание заказа',
  pending = 'Готовим',
  done = 'Выполнен',
}

const OrderCard: React.FC<IOrderCard> = ({
  order,
  isStatusShown,
  modalPath,
}) => {
  const location = useLocation()
  const currentIngredients = useIngredientsByIds(order.ingredients)
  const uniqueIngredientsList = [...new Set(currentIngredients)]

  // Date
  const displayedDate = dateConverter(order.createdAt)

  return (
    <Link
      className={styles.wrapper}
      state={{ background: location }}
      to={`${modalPath}/${order.number}`}
    >
      <div className={styles.header}>
        <p className={`${styles.suptitle} mb-2 text text_type_digits-default`}>
          #{order.number}
        </p>

        <span
          className={`${styles.timing} text text_type_main-small text_color_inactive`}
        >
          {displayedDate}
        </span>
      </div>

      <div className={`${styles.title} text text_type_main-medium`}>
        <p>{order.name}</p>

        {isStatusShown && (
          <p className={styles[`title_${order.status}`]}>
            {OrderStatus[order.status]}
          </p>
        )}
      </div>

      <div className={styles.footer}>
        <IngredientsList ingredients={uniqueIngredientsList} />
        <PriceCard size="small" ingredients={currentIngredients} />
      </div>
    </Link>
  )
}

export default OrderCard
