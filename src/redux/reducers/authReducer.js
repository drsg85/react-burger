const initialState = {
  isLoading: false,
  hasError: false,
  user: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...initialState,
        isLoading: true,
      }

    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: {
          email: action.payload.user.email,
          name: action.payload.user.name,
        },
      }

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        hasError: true,
      }

    default:
      return state
  }
}
