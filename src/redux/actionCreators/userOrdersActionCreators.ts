import {
  closedUserOrdersWSConnectionA,
  errorUserOrdersWSConnectionA,
  getUserOrdersA,
  startUserOrdersWSConnectionA,
  stopUserOrdersWSConnectionA,
  successUserOrdersWSConnectionA,
} from 'redux/actions/userOrdersWSActions'
import { IUserOrders, userOrdersWSActionTypes } from 'redux/actions/webSocket'

export const startUserOrdersWSConnection = (
  url: string,
): startUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.START,
  payload: url,
})

export const stopUserOrdersWSConnection = (): stopUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.STOP,
})

export const successUserOrdersWSConnection = (
  event: Event,
): successUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.SUCCESS,
  payload: event,
})

export const closedUserOrdersWSConnection = (
  event: Event,
): closedUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.CLOSED,
  payload: event,
})

export const errorUserOrdersWSConnection = (
  event: Event,
): errorUserOrdersWSConnectionA => ({
  type: userOrdersWSActionTypes.ERROR,
  payload: event,
})

export const getUserOrders = (event: MessageEvent): getUserOrdersA => {
  const data: IUserOrders = JSON.parse(event.data as string) as IUserOrders

  return {
    type: userOrdersWSActionTypes.GET_ORDERS,
    payload: {
      orders: data.orders,
    },
  }
}
