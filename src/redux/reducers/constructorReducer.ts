import { ConstructorActions } from 'redux/actions/constructorActions'

// Types
import { IConstructorIngredient, IIngredient } from 'types'

interface IConstructorState {
  bun: IIngredient | null
  ingredients: IConstructorIngredient[] | null
}

const initialState: IConstructorState = {
  bun: null,
  ingredients: null,
}

export const constructorReducer = (
  state = initialState,
  action: ConstructorActions,
) => {
  switch (action.type) {
    case 'ADD_BUN':
      return {
        ...state,
        bun: action.payload.bun,
      }

    case 'ADD_INGREDIENT': {
      if (state.ingredients) {
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload.ingredient],
        }
      }
      return {
        ...state,
        ingredients: [action.payload.ingredient],
      }
    }

    case 'REMOVE_INGREDIENT': {
      if (state.ingredients) {
        const ingredients = state.ingredients.filter(
          (ingredient) => ingredient.uuid !== action.payload.id,
        )

        if (ingredients.length !== 0) {
          return {
            ...state,
            ingredients,
          }
        } else {
          return {
            ...state,
            ingredients: null,
          }
        }
      }

      return state
    }

    case 'REORDER_INGREDIENTS': {
      return {
        ...state,
        ingredients: action.payload.ingredients,
      }
    }

    default:
      return state
  }
}
