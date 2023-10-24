import { IngredientActions } from 'redux/actions/ingredientsActions'
import { IIngredient } from 'types'

interface IIngredientState {
  isLoading: boolean
  hasError: boolean
  ingredients: IIngredient[] | null
}

export const initialState: IIngredientState = {
  isLoading: false,
  hasError: false,
  ingredients: null,
}

export const ingredientReducer = (
  state = initialState,
  action: IngredientActions,
): IIngredientState => {
  switch (action.type) {
    case 'INGREDIENTS_REQUEST':
      return {
        ...initialState,
        isLoading: true,
      }

    case 'INGREDIENTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        ingredients: action.payload.ingredients,
      }

    case 'INGREDIENTS_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }

    default:
      return state
  }
}
