import { userOrdersWSActions } from 'redux/actions/userOrdersWSActions'
import { IWSOrder, userOrdersWSActionTypes } from 'redux/actions/webSocket'

export interface IWSUserOrdersState {
  wsConnected: boolean
  orders: IWSOrder[] | null
  error?: Event | undefined
}

const initialState: IWSUserOrdersState = {
  wsConnected: false,
  orders: null,
}

export const userOrdersWSReducer = (
  state = initialState,
  action: userOrdersWSActions,
): IWSUserOrdersState => {
  switch (action.type) {
    case userOrdersWSActionTypes.SUCCESS:
      return {
        ...initialState,
        wsConnected: true,
      }

    case userOrdersWSActionTypes.ERROR:
      return {
        ...initialState,
        wsConnected: false,
        error: action.payload,
      }

    case userOrdersWSActionTypes.CLOSED:
      return {
        ...initialState,
      }

    case userOrdersWSActionTypes.GET_ORDERS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
