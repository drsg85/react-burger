import React from 'react'

// Redux
import { IWSOrder } from 'redux/actions/webSocket'

// Components
import OrderCard from 'components/OrderCard/OrderCard'

// Styles
import styles from './OrderFeed.module.scss'

interface IOrderFeed {
  orders: IWSOrder[]
  isStatusShown?: boolean
  modalPath: string
}

const OrderFeed: React.FC<IOrderFeed> = ({
  orders,
  isStatusShown = false,
  modalPath,
}) => {
  const orderList = orders
    .slice(0, 12)
    .map((el) => (
      <OrderCard
        isStatusShown={isStatusShown}
        key={el._id}
        order={el}
        modalPath={modalPath}
      />
    ))

  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>{orderList}</ul>
    </section>
  )
}

export default OrderFeed
