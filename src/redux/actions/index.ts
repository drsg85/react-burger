import { ConstructorActions } from './constructorActions'
import { IngredientDetailsActions } from './ingredientDetailsAction'
import { IngredientActions } from './ingredientsActions'

export type TAppActions =
  | IngredientDetailsActions
  | IngredientActions
  | ConstructorActions
