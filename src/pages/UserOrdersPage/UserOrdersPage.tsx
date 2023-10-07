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
      <h2>Лента заказов</h2>
      {orders ? (
        <div>
          {orders.map((order) => (
            <>
              <p>{order._id}</p>
            </>
          ))}
        </div>
      ) : (
        <h4>Тут будет загрузка</h4>
      )}
    </div>
  )
}

export default UserOrdersPage
