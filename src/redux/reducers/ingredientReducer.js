const initialState = {
    isLoading: false,
    hasError: false,
    ingredients: null,
}

export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INGREDIENTS_REQUEST':
            return {
                ...state,
                isLoading: true,
            }

        case 'INGREDIENTS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                ingredients: action.payload.ingredients,
            }

        case 'INGREDIENTS_ERROR':
            return {
                ...state,
                isLoading: false,
                hasError: true,
            }

        default:
            return state
    }
}
