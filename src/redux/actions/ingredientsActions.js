import { fetchIngredients } from "../../utils/getUrl"

export const getIngredientsRequest = { type: 'INGREDIENTS_REQUEST' }

export const getIngredientsSuccess = (data) => ({
  type: 'INGREDIENTS_SUCCESS',
  payload: {
    ingredients: data,
  },
})

export const getIngredientsError = { type: 'INGREDIENTS_ERROR' }

export const getIngredients = () => (dispatch) => {
  dispatch(getIngredientsRequest)

  fetchIngredients()
    .then((data) => {
      dispatch(getIngredientsSuccess(data))
    })
    .catch(() => dispatch(getIngredientsError))
}