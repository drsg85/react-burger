import { IIngredient } from 'types'
import { IngredientDetailsActions } from 'redux/actions/ingredientDetailsAction'

export interface IIngredientDetailsState {
  ingredient: IIngredient | null
}

export const initialState: IIngredientDetailsState = {
  ingredient: null,
}

export const ingredientDetailsReducer = (
  state = initialState,
  action: IngredientDetailsActions,
): IIngredientDetailsState => {
  switch (action.type) {
    case 'SET_INGREDIENT_DETAILS':
      return {
        ingredient: action.payload.ingredient,
      }

    case 'RESET_INGREDIENT_DETAILS':
      return {
        ingredient: null,
      }

    default:
      return state
  }
}
