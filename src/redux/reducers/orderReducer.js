const initialState = {
    isLoading: false,
    hasError: false,
    orderInfo: null,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER_REQUEST':
            return {
                ...initialState,
                isLoading: true,
            }

        case 'ORDER_SUCCESS':
            return {
                ...state,
                isLoading: false,
                orderInfo: {
                    burgersName: action.payload.orderInfo.burgersName,
                    orderNumber: action.payload.orderInfo.orderNumber,
                },
            }

        case 'ORDER_ERROR':
            return {
                ...initialState,
                hasError: true,
            }

        default:
            return state
    }
}