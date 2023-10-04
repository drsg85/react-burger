import { combineReducers } from 'redux'

//  Reducers
import { ingredientReducer } from './ingredientReducer'
import { constructorReducer } from './constructorReducer'
import { ingredientDetailsReducer } from './IngredientDetailsReducer'
import { orderReducer } from './orderReducer'
import { authReducer } from './authReducer'
import { allOrdersWSReducer } from './allOrdersWSReducer'

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  burgerConstructor: constructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderReducer,
  auth: authReducer,
  allOrders: allOrdersWSReducer,
})
