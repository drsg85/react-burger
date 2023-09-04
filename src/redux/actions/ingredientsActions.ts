// Redux
import { AppThunk } from 'redux/store'

// Types and utils
import { IIngredient } from 'types'
import { fetchIngredients } from 'utils/getUrl'

// Typing
export interface IGetIngredientsRequestA {
  type: 'INGREDIENTS_REQUEST'
}

export interface IGetIngredientsSuccessA {
  type: 'INGREDIENTS_SUCCESS'
  payload: {
    ingredients: IIngredient[]
  }
}

export interface IGetIngredientsErrorA {
  type: 'INGREDIENTS_ERROR'
}

export type IngredientActions =
  | IGetIngredientsRequestA
  | IGetIngredientsSuccessA
  | IGetIngredientsErrorA

// Actions
export const getIngredientsRequest: IGetIngredientsRequestA = {
  type: 'INGREDIENTS_REQUEST',
}

export const getIngredientsSuccess = (
  ingredients: IIngredient[],
): IGetIngredientsSuccessA => ({
  type: 'INGREDIENTS_SUCCESS',
  payload: {
    ingredients,
  },
})

export const getIngredientsError: IGetIngredientsErrorA = {
  type: 'INGREDIENTS_ERROR',
}

export const getIngredients = (): AppThunk => (dispatch) => {
  dispatch(getIngredientsRequest)

  fetchIngredients()
    .then((data) => {
      dispatch(getIngredientsSuccess(data))
    })
    .catch(() => dispatch(getIngredientsError))
}
