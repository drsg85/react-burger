const initialState = {
    bun: null,
    ingredients: null,
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BUN':
            return {
                ...state,
                bun: action.payload.bun,
            }

        case 'ADD_INGREDIENT': {
            if (state.ingredients) {
                return {
                    ...state,
                    ingredients: [...state.ingredients, action.payload.ingredient]
                }
            }
            return {
                ...state,
                ingredients: [action.payload.ingredient]
            }
        }

        case 'REMOVE_INGREDIENT': {
            if (state.ingredients) {
                const ingredients = state.ingredients.filter(ingredient => ingredient.uuid !== action.payload.id);

                if (ingredients.length) {
                    return {
                        ...state,
                        ingredients,
                    }
                } else {
                    return {
                        ...state,
                        ingredients: null,
                    }
                }
            }

            return state
        }

        default:
            return state
    }
}