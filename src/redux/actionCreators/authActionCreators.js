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
