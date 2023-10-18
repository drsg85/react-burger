import { AuthActions } from '../actionCreators/authActionCreators'

import { allOrdersWSActions } from './allOrdersWSActions'

import { ConstructorActions } from './constructorActions'
import { IngredientDetailsActions } from './ingredientDetailsAction'
import { IngredientActions } from './ingredientsActions'
import { OrderActions } from './orderActions'
import { userOrdersWSActions } from './userOrdersWSActions'

export type TAppActions =
  | IngredientDetailsActions
  | IngredientActions
  | ConstructorActions
  | OrderActions
  | AuthActions
  | allOrdersWSActions
  | userOrdersWSActions

export * from './authActions'
export * from './constructorActions'
export * from './ingredientDetailsAction'
export * from './ingredientsActions'
export * from './orderActions'
