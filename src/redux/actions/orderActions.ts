// Redux
import { AppThunk } from 'redux/store'

// Types and utils

import { fetchOrder } from '../../utils/getUrl'
import { IFetchOrderResponse } from 'types'

// Typing
export interface IOrderRequestA {
  type: 'ORDER_REQUEST'
}

export interface IOrderSuccessA {
  type: 'ORDER_SUCCESS'
  payload: {
    orderInfo: {
      burgersName: string
      orderNumber: number
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
  orderNumber: number,
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

    fetchOrder<IFetchOrderResponse>(ingredients)
      .then((res) => {
        dispatch(orderSuccess(res.name, res.order.number))
      })
      .catch(() => dispatch(orderError))
  }
