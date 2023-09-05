// Redux
import { AppThunk } from 'redux/store'

// Types and utils

import { fetchOrder } from '../../utils/getUrl'

// Typing
export interface IOrderRequestA {
  type: 'ORDER_REQUEST'
}

export interface IOrderSuccessA {
  type: 'ORDER_SUCCESS'
  payload: {
    orderInfo: {
      burgersName: string
      orderNumber: string
    }
  }
}

export interface IOrderErrorA {
  type: 'ORDER_ERROR'
}

export type OrderActions = IOrderRequestA | IOrderSuccessA | IOrderErrorA

// Actions
export const orderRequest: IOrderRequestA = {
  type: 'ORDER_REQUEST',
}

export const orderSuccess = (
  burgersName: string,
  orderNumber: string,
): IOrderSuccessA => ({
  type: 'ORDER_SUCCESS',
  payload: {
    orderInfo: {
      burgersName,
      orderNumber,
    },
  },
})

export const orderError: IOrderErrorA = {
  type: 'ORDER_ERROR',
}

export const setOrder =
  (ingredients: string[]): AppThunk =>
  (dispatch) => {
    dispatch(orderRequest)

    fetchOrder(ingredients)
      .then((data) => {
        dispatch(orderSuccess(data.name, data.order.number))
      })
      .catch(() => dispatch(orderError))
  }
