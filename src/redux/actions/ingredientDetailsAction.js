export const setIngredientDetails = (ingredient) => ({
    type: 'SET_INGREDIENT_DETAILS',
    payload: {
        ingredient,
    }
})

export const resetIngredientDetails = {
    type: 'RESET_INGREDIENT_DETAILS',
    payload: {
        ingredient: null,
    }
}