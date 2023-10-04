import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  startAllOrdersWSConnection,
  stopAllOrdersWSConnection,
} from 'redux/actionCreators/allOrdersActionCreators'
import { allOrderWSSelector } from 'redux/selectors/allOrdersWSSelectors'
import { useDispatch } from 'redux/store'
import { WS_URL_ALL_ORDERS } from 'utils'

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
    <main>
      <h2>Лента заказов</h2>
      {orders ? <h4>Тут будут заказы</h4> : <h4>Тут будет загрузка</h4>}
    </main>
  )
}

export default FeedPage
