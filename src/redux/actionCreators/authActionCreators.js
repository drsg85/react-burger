// register actions
export const registerRequest = () => ({
  type: 'REGISTER_REQUEST',
})

export const registerSuccess = (user) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: {
      user: {
        email: user.email,
        name: user.name,
      },
    },
  }
}

export const registerError = () => ({
  type: 'REGISTER_ERROR',
})

// login actions
export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
})

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      user: {
        email: user.email,
        name: user.name,
      },
    },
  }
}

export const loginError = () => ({
  type: 'LOGIN_ERROR',
})

// logout actions
export const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST',
})

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
})

export const logoutError = () => ({
  type: 'LOGOUT_ERROR',
})

// getuser actions
export const getUserRequest = () => ({
  type: 'GET_USER_REQUEST',
})

export const getUserSuccess = (user) => ({
  type: 'GET_USER_SUCCESS',
  payload: {
    user: {
      email: user.email,
      name: user.name,
    },
  },
})

export const getUserError = () => ({
  type: 'GET_USER_ERROR',
})

// setuser actions
export const setUserRequest = () => ({
  type: 'SET_USER_REQUEST',
})

export const setUserSuccess = (user) => ({
  type: 'SET_USER_SUCCESS',
  payload: {
    user: {
      email: user.email,
      name: user.name,
    },
  },
})

export const setUserError = () => ({
  type: 'SET_USER_ERROR',
})
