import { IngredientActions } from 'redux/actions'
import { ingredientReducer as reducer } from './ingredientReducer'
import { IIngredient } from 'types'
import { mockBun, mockMain, mockSauce } from './mockData'

describe('Ingredient Reducer tests', function () {
  const ingredients: IIngredient[] = [mockBun, mockMain, mockSauce]

  const initialState = {
    isLoading: false,
    hasError: false,
    ingredients: null,
  }

  const requestState = {
    ...initialState,
    isLoading: true,
  }

  const successState = {
    ...requestState,
    isLoading: false,
    ingredients,
  }

  //   TEST COMMENT

  const errorState = {
    ...requestState,
    isLoading: false,
    hasError: true,
  }

  it('should return initialState', function () {
    expect(reducer(initialState, {} as IngredientActions)).toEqual(initialState)
  })

  it('should handle INGREDIENTS_REQUEST', function () {
    expect(reducer(requestState, {} as IngredientActions)).toEqual(requestState)
  })
})
