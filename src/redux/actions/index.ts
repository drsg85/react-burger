import { ConstructorActions } from './constructorActions'
import { IngredientDetailsActions } from './ingredientDetailsAction'
import { IngredientActions } from './ingredientsActions'
import { OrderActions } from './orderActions'

export type TAppActions =
  | IngredientDetailsActions
  | IngredientActions
  | ConstructorActions
  | OrderActions
