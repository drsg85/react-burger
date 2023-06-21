export const orderRequest = {
    type: 'ORDER_REQUEST'
}

export const orderSuccess = (burgersName, orderNumber) => ({
    type: 'ORDER_SUCCESS',
    payload: {
        orderInfo: {
            burgersName,
            orderNumber,
        }
    }
})

export const orderError = {
    type: 'ORDER_ERROR'
}