import { AuthActions } from '../actionCreators/authActionCreators'

import { ConstructorActions } from './constructorActions'
import { IngredientDetailsActions } from './ingredientDetailsAction'
import { IngredientActions } from './ingredientsActions'
import { OrderActions } from './orderActions'

export type TAppActions =
  | IngredientDetailsActions
  | IngredientActions
  | ConstructorActions
  | OrderActions
  | AuthActions

export * from './authActions'
export * from './constructorActions'
export * from './ingredientDetailsAction'
export * from './ingredientsActions'
export * from './orderActions'
