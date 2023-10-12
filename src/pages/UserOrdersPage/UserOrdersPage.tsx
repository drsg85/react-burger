import OrderFeed from 'components/OrderFeed/OrderFeed'
import { FC, useEffect } from 'react'
import {
  startUserOrdersWSConnection,
  stopUserOrdersWSConnection,
} from 'redux/actionCreators/userOrdersActionCreators'
import { userOrderWSSelector } from 'redux/selectors'
import { useDispatch, useSelector } from 'redux/store'
import { WS_URL_USER_ORDERS, getCookie } from 'utils'

const UserOrdersPage: FC = () => {
  const dispatch = useDispatch()
  const accessToken = getCookie('accessToken')
  const wsUrl = `${WS_URL_USER_ORDERS}?token=${accessToken}`

  const { orders } = useSelector(userOrderWSSelector)

  useEffect(() => {
    dispatch(startUserOrdersWSConnection(wsUrl))

    return () => {
      dispatch(stopUserOrdersWSConnection())
    }
  }, [dispatch, wsUrl])

  return (
    <div>
      {orders ? (
        <div>
          {orders.map((order) => (
            <>
              <OrderFeed orders={orders} modalPath={'/feed'} />
            </>
          ))}
        </div>
      ) : (
        <h4>Загрузка</h4>
      )}
    </div>
  )
}

export default UserOrdersPage
