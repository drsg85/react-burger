export const setBun = (bun) => ({
    type: 'ADD_BUN',
    payload: {
        bun,
    }
})

export const setIngredient = (ingredient) => ({
    type: 'ADD_INGREDIENT',
    payload: {
        ingredient: {
            ...ingredient,
            uuid: crypto.randomUUID(),
        },
    }
})

export const removeIngredient = (id) => ({
    type: 'REMOVE_INGREDIENT',
    payload: {
        id,
    }
})