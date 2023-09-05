// Redux
import { AppThunk } from 'redux/store'

// Types and utils
import { IIngredient, IIngredientsRespose } from 'types'
import { INGREDIENTS_URL } from 'utils/constants'
import { checkResponse } from 'utils/getUrl'

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

  fetch(INGREDIENTS_URL)
    .then(checkResponse<IIngredientsRespose>)
    .then((res) => {
      dispatch(getIngredientsSuccess(res.data))
    })
    .catch(() => dispatch(getIngredientsError))
}
