import { fetchOrder } from '../../utils/getUrl'

export const orderRequest = {
  type: 'ORDER_REQUEST',
}

export const orderSuccess = (burgersName, orderNumber) => ({
  type: 'ORDER_SUCCESS',
  payload: {
    orderInfo: {
      burgersName,
      orderNumber,
    },
  },
})

export const orderError = {
  type: 'ORDER_ERROR',
}

export const setOrder = (ingredients) => (dispatch) => {
  dispatch(orderRequest)

  fetchOrder(ingredients)
    .then((data) => {
      dispatch(orderSuccess(data.name, data.order.number))
    })
    .catch(() => dispatch(orderError))
}
