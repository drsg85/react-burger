const initialState = {
  isLoading: true,
  hasError: false,
  user: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // register logic
    case 'REGISTER_REQUEST':
      return initialState

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: {
          email: action.payload.user.email,
          name: action.payload.user.name,
        },
      }

    case 'REGISTER_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }

    // login logic
    case 'LOGIN_REQUEST':
      return initialState

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: {
          email: action.payload.user.email,
          name: action.payload.user.name,
        },
      }

    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }

    // logout logic
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }

    case 'LOGOUT_SUCCESS':
      return {
        initialState,
        isLoading: false,
      }

    case 'LOGOUT_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }

    // getUser logic
    case 'GET_USER_REQUEST':
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }

    case 'GET_USER_SUCCESS':
      return {
        ...initialState,
        isLoading: false,
        user: {
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
      }

    case 'GET_USER_ERROR':
      return {
        ...initialState,
        isLoading: false,
        hasError: true,
      }

    // setUser
    case 'SET_USER_REQUEST':
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }

    case 'SET_USER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        user: {
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
      }

    case 'SET_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }

    default:
      return state
  }
}
