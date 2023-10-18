import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Redux
import { IWSOrder } from 'redux/actions/webSocket'

// Utils
import { ORDER_URL, checkResponse } from 'utils'

// Components
import OrderCardDetailsBody from './OrderCardDetailsBody/OrderCardDetailsBody'

const OrderCardDetails = () => {
  const { id = '' } = useParams()

  const [{ order, isLoading, hasError }, setOrderState] = useState<{
    order: null | IWSOrder
    isLoading: boolean
    hasError: boolean
  }>({
    order: null,
    isLoading: true,
    hasError: false,
  })

  useEffect(() => {
    const headers = { 'Content-Type': 'application/json' }

    fetch(`${ORDER_URL}/${id}`, { headers })
      .then(checkResponse<{ orders: IWSOrder[] }>)
      .then((res) =>
        setOrderState((prev) => ({
          ...prev,
          isLoading: false,
          order: res.orders[0],
        })),
      )
      .catch((error) => {
        setOrderState((prev) => ({
          ...prev,
          isLoading: false,
          hasError: true,
        }))

        console.log('Error in order fetch: ', error)
      })
  }, [id])

  return (
    <>
      {isLoading && <h1>Loading...</h1>}

      {hasError && <h1>Что-то пошло не так...</h1>}

      {order && <OrderCardDetailsBody order={order} />}
    </>
  )
}

export default OrderCardDetails
