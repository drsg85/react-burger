import classNames from 'classnames'
import React from 'react'

// Redux
import { useSelector } from 'redux/store'
import { allOrderWSSelector } from 'redux/selectors/allOrdersWSSelectors'

// Components
import OrderCount from './OrderCount/OrderCount'

// Styles
import styles from './orderInfo.module.css'

const OrderInfo: React.FC = () => {
  const { total, totalToday, onworkOrders, doneOrders } =
    useSelector(allOrderWSSelector)

  const doneOrdersList = doneOrders?.slice(0, 12).map((id) => (
    <li key={id} className="text text_type_digits-default">
      {id}
    </li>
  ))

  const onworkOrdersList = onworkOrders?.slice(0, 12).map((id) => (
    <li key={id} className="text text_type_digits-default">
      {id}
    </li>
  ))

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.orders}>
          <h3 className={styles.orders__title}>Готовы:</h3>

          <ul className={styles.orders__list}>{doneOrdersList}</ul>
        </div>

        <div className={styles.orders}>
          <h3 className={styles.orders__title}>В работе:</h3>

          <ul className={styles.orders__list}>{onworkOrdersList}</ul>
        </div>

        <div className={styles.allOrders}>
          <OrderCount title="Выполнено за все время:" count={total} />
        </div>

        <div className={styles.todayOrders}>
          <OrderCount title="Выполнено за сегодня:" count={totalToday} />
        </div>
      </div>
    </section>
  )
}

export default React.memo(OrderInfo)
