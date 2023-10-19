// Types
import { IIngredient } from 'types'

// Redux
import {
  IngredientDetailsActions,
  resetIngredientDetails,
  setIngredientDetails,
} from 'redux/actions'

import {
  IIngredientDetailsState,
  ingredientDetailsReducer as reducer,
} from './IngredientDetailsReducer'

describe('Ingredient Details Reducer test', () => {
  const initialState: IIngredientDetailsState = {
    ingredient: null,
  }

  it('should return the initial state', () => {
    expect(reducer(initialState, {} as IngredientDetailsActions)).toEqual(
      initialState,
    )
  })

  it('should handle SET_INGREDIENT_DETAILS', () => {
    const ingredient: IIngredient = {
      _id: '60d3b41abdacab0026a733c6',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    }
    const expectedState = {
      ingredient,
    }

    expect(reducer(initialState, setIngredientDetails(ingredient))).toEqual(
      expectedState,
    )
  })

  it('should handle RESET_INGREDIENT_DETAILS', () => {
    expect(reducer(initialState, resetIngredientDetails)).toEqual(initialState)
  })
})
