const initialState = {
  ingredient: null,
}

export const ingredientDetailsReducer = (state = initialState, action) => {
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
