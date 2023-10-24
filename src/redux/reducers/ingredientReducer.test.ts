// Types
import { IIngredient } from 'types'

// Redux
import {
  IngredientActions,
  getIngredientsError,
  getIngredientsRequest,
  getIngredientsSuccess,
} from 'redux/actions'
import { initialState, ingredientReducer as reducer } from './ingredientReducer'
import { mockBun, mockMain, mockSauce } from './mockData'

describe('Ingredient Reducer tests', function () {
  const ingredients: IIngredient[] = [mockBun, mockMain, mockSauce]

  const requestState = {
    ...initialState,
    isLoading: true,
  }

  const successState = {
    ...requestState,
    isLoading: false,
    ingredients,
  }

  const errorState = {
    ...requestState,
    isLoading: false,
    hasError: true,
  }

  // Default behavior
  it('should return initialState', function () {
    expect(reducer(initialState, {} as IngredientActions)).toEqual(initialState)
    expect(reducer(requestState, {} as IngredientActions)).toEqual(requestState)
    expect(reducer(successState, {} as IngredientActions)).toEqual(successState)
    expect(reducer(errorState, {} as IngredientActions)).toEqual(errorState)
  })

  // Request behavior
  it('should handle INGREDIENTS_REQUEST', function () {
    expect(reducer(initialState, getIngredientsRequest)).toEqual(requestState)
    expect(reducer(requestState, getIngredientsRequest)).toEqual(requestState)
    expect(reducer(successState, getIngredientsRequest)).toEqual(requestState)
    expect(reducer(errorState, getIngredientsRequest)).toEqual(requestState)
  })

  // Success behavior
  it('should handle INGREDIENTS_SUCCESS', function () {
    expect(reducer(requestState, getIngredientsSuccess(ingredients))).toEqual(
      successState,
    )
  })

  // Error behavior
  it('should handle INGREDIENTS_ERROE', function () {
    expect(reducer(requestState, getIngredientsError)).toEqual(errorState)
  })
})
