import {
  closedAllOrdersWSConnection,
  errorAllOrdersWSConnection,
  getAllOrders,
  successAllOrdersWSConnection,
} from 'redux/actionCreators/allOrdersActionCreators'

export interface IWSOrder {
  ingredients: string[]
  _id: string
  name: string
  number: number
  status: 'created' | 'pending' | 'done'
  createdAt: string
  updatedAt: string
}

export interface IAllOrders {
  orders: IWSOrder[]
  onworkOrders: number[]
  doneOrders: number[]
  total: number
  totalToday: number
}

export interface IUserOrders {
  orders: IWSOrder[]
}

export enum allOrdersWSActionTypes {
  START = 'WS_ALL_ORDERS_CONNECTION_START',
  STOP = 'WS_ALL_ORDERS_CONNECTION_STOP',
  SUCCESS = 'WS_ALL_ORDERS_CONNECTION_SUCCESS',
  CLOSED = 'WS_ALL_ORDERS_CONNECTION_CLOSED',
  ERROR = 'WS_ALL_ORDERS_CONNECTION_ERROR',
  GET_ORDERS = 'WS_ALL_ORDERS_GET_ALL_ORDERS',
}

export const allOrdersMiddlewareProp = {
  wsStart: allOrdersWSActionTypes.START,
  wsStop: allOrdersWSActionTypes.STOP,
  onOpen: successAllOrdersWSConnection,
  onMessage: getAllOrders,
  onError: errorAllOrdersWSConnection,
  onClose: closedAllOrdersWSConnection,
}
