export const getIngredientsRequest = { type: 'INGREDIENTS_REQUEST' }

export const getIngredientsSuccess = (data) => ({
  type: 'INGREDIENTS_SUCCESS',
  payload: {
    ingredients: data,
  },
})

export const getIngredientsError = { type: 'INGREDIENTS_ERROR' }
