import { allOrdersWSActions } from 'redux/actions/allOrdersWSActions'

// Redux
import {
  closedAllOrdersWSConnection,
  errorAllOrdersWSConnection,
  getAllOrders,
  successAllOrdersWSConnection,
} from 'redux/actionCreators'

import {
  initialState,
  IWSAllOrdersState,
  allOrdersWSReducer as reducer,
} from './allOrdersWSReducer'

// Mock data
import { mockOrder } from './mockData'

describe('All Orders WS Reducer tests', () => {
  const event = {} as Event
  const messageEvent: MessageEvent = {
    data: JSON.stringify({
      orders: [mockOrder('done'), mockOrder('pending'), mockOrder('created')],
      total: 1337,
      totalToday: 42,
    }),
  } as MessageEvent

  const successState: IWSAllOrdersState = {
    ...initialState,
    wsConnected: true,
  }

  const errorState: IWSAllOrdersState = {
    ...initialState,
    wsConnected: false,
    error: event,
  }

  const closedState: IWSAllOrdersState = {
    ...initialState,
    wsConnected: false,
  }

  const getOrdersState: IWSAllOrdersState = {
    ...successState,
    orders: [mockOrder('done'), mockOrder('pending'), mockOrder('created')],
    onworkOrders: [mockOrder('pending').number],
    doneOrders: [mockOrder('done').number],
    total: 1337,
    totalToday: 42,
  }

  // Default behavior
  it('should return initialState', () => {
    expect(reducer(initialState, {} as allOrdersWSActions)).toEqual(
      initialState,
    )
    expect(reducer(successState, {} as allOrdersWSActions)).toEqual(
      successState,
    )
    expect(reducer(errorState, {} as allOrdersWSActions)).toEqual(errorState)
    expect(reducer(closedState, {} as allOrdersWSActions)).toEqual(closedState)
    expect(reducer(getOrdersState, {} as allOrdersWSActions)).toEqual(
      getOrdersState,
    )
  })

  it('should handle SUCCESS', function () {
    expect(reducer(initialState, successAllOrdersWSConnection(event))).toEqual(
      successState,
    )
  })

  it('should handle ERROR', function () {
    expect(reducer(initialState, errorAllOrdersWSConnection(event))).toEqual(
      errorState,
    )
  })

  it('should handle CLOSED', function () {
    expect(reducer(successState, closedAllOrdersWSConnection(event))).toEqual(
      initialState,
    )
  })

  it('should handle GET_ORDERS', function () {
    expect(reducer(successState, getAllOrders(messageEvent))).toEqual(
      getOrdersState,
    )
  })
})
