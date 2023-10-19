import { IOrderState, orderReducer as reducer } from './orderReducer'
import {
  OrderActions,
  orderError,
  orderRequest,
  orderSuccess,
} from './../actions/orderActions'

describe('Order Reducer tests', () => {
  const initialState: IOrderState = {
    isLoading: false,
    hasError: false,
    orderInfo: null,
  }

  const requestState = {
    ...initialState,
    isLoading: true,
  }

  const response = {
    name: 'Some juicy burger',
    order: {
      number: 1234567,
    },
  }

  const successState = {
    ...initialState,
    isLoading: false,
    orderInfo: {
      burgersName: response.name,
      orderNumber: response.order.number,
    },
  }

  const errorState = {
    ...initialState,
    hasError: true,
  }

  // Default behavior
  it('should return the initial state', () => {
    expect(reducer(initialState, {} as OrderActions)).toEqual(initialState)
    expect(reducer(requestState, {} as OrderActions)).toEqual(requestState)
    expect(reducer(successState, {} as OrderActions)).toEqual(successState)
    expect(reducer(errorState, {} as OrderActions)).toEqual(errorState)
  })

  // Request behavior
  it('should handle ORDER_REQUEST', () => {
    expect(reducer(initialState, orderRequest)).toEqual(requestState)
    expect(reducer(requestState, orderRequest)).toEqual(requestState)
    expect(reducer(successState, orderRequest)).toEqual(requestState)
    expect(reducer(errorState, orderRequest)).toEqual(requestState)
  })

  // Success behavior
  it('should handle ORDER_SUCCESS', () => {
    expect(
      reducer(requestState, orderSuccess(response.name, response.order.number)),
    ).toEqual(successState)
  })

  // Error behavior
  it('should handle ORDER_ERROR', () => {
    expect(reducer(requestState, orderError)).toEqual(errorState)
  })
})
