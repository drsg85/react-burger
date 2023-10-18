import  { FC, useEffect } from 'react'
import classNames from 'classnames'

// Utils
import { WS_URL_ALL_ORDERS } from 'utils'

// Redux
import { useDispatch, useSelector } from 'redux/store'
import {
  startAllOrdersWSConnection,
  stopAllOrdersWSConnection,
} from 'redux/actionCreators'
import { allOrderWSSelector } from 'redux/selectors'

// Components
import OrderFeed from 'components/OrderFeed/OrderFeed'
import OrderInfo from 'components/OrderInfo/OrderInfo'

// Styles
import styles from './feedPage.module.css'

export const FeedPage: FC = () => {
  const dispatch = useDispatch()

  const { orders } = useSelector(allOrderWSSelector)

  useEffect(() => {
    dispatch(startAllOrdersWSConnection(WS_URL_ALL_ORDERS))

    // Component will unmount
    return () => {
      dispatch(stopAllOrdersWSConnection())
    }
  }, [dispatch])

  return (
    <main className={classNames('container', styles.wrapper)}>
      {orders ? (
        <>
          <h2 className={styles.title}>Лента заказов</h2>
          <OrderFeed orders={orders} modalPath="/feed" />
          <OrderInfo />
        </>
      ) : (
        <h4>Загрузка</h4>
      )}
    </main>
  )
}

export default FeedPage
