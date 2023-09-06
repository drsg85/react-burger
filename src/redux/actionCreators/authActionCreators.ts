import { IUser } from 'types'

// Typing
export interface IRegisterRequestA {
  type: 'REGISTER_REQUEST'
}

export interface IRegisterSuccessA {
  type: 'REGISTER_SUCCESS'
  payload: {
    user: IUser
  }
}

export interface IRegisterErrorA {
  type: 'REGISTER_ERROR'
}

export interface ILoginRequestA {
  type: 'LOGIN_REQUEST'
}

export interface ILoginSuccessA {
  type: 'LOGIN_SUCCESS'
  payload: {
    user: IUser
  }
}

export interface ILoginErrorA {
  type: 'LOGIN_ERROR'
}

export interface ILogoutRequestA {
  type: 'LOGOUT_REQUEST'
}

export interface ILogoutSuccessA {
  type: 'LOGOUT_SUCCESS'
}

export interface ILogoutErrorA {
  type: 'LOGOUT_ERROR'
}

export interface IGetUserRequestA {
  type: 'GET_USER_REQUEST'
}

export interface IGetUserSuccessA {
  type: 'GET_USER_SUCCESS'
  payload: {
    user: IUser
  }
}

export interface IGetUserErrorA {
  type: 'GET_USER_ERROR'
}

export interface ISetUserRequestA {
  type: 'SET_USER_REQUEST'
}

export interface ISetUserSuccessA {
  type: 'SET_USER_SUCCESS'
  payload: {
    user: IUser
  }
}

export interface ISetUserErrorA {
  type: 'SET_USER_ERROR'
}

export type AuthActions =
  | IRegisterRequestA
  | IRegisterSuccessA
  | IRegisterErrorA
  | ILoginRequestA
  | ILoginSuccessA
  | ILoginErrorA
  | ILogoutRequestA
  | ILogoutSuccessA
  | ILogoutErrorA
  | IGetUserRequestA
  | IGetUserSuccessA
  | IGetUserErrorA
  | ISetUserRequestA
  | ISetUserSuccessA
  | ISetUserErrorA

// register actions
export const registerRequest = (): IRegisterRequestA => ({
  type: 'REGISTER_REQUEST',
})

export const registerSuccess = (user: IUser): IRegisterSuccessA => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: {
      user,
    },
  }
}

export const registerError = (): IRegisterErrorA => ({
  type: 'REGISTER_ERROR',
})

// login actions
export const loginRequest = (): ILoginRequestA => ({
  type: 'LOGIN_REQUEST',
})

export const loginSuccess = (user: IUser): ILoginSuccessA => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      user,
    },
  }
}

export const loginError = (): ILoginErrorA => ({
  type: 'LOGIN_ERROR',
})

// logout actions
export const logoutRequest = (): ILogoutRequestA => ({
  type: 'LOGOUT_REQUEST',
})

export const logoutSuccess = (): ILogoutSuccessA => ({
  type: 'LOGOUT_SUCCESS',
})

export const logoutError = (): ILogoutErrorA => ({
  type: 'LOGOUT_ERROR',
})

// getuser actions
export const getUserRequest = (): IGetUserRequestA => ({
  type: 'GET_USER_REQUEST',
})

export const getUserSuccess = (user: IUser): IGetUserSuccessA => ({
  type: 'GET_USER_SUCCESS',
  payload: {
    user,
  },
})

export const getUserError = (): IGetUserErrorA => ({
  type: 'GET_USER_ERROR',
})

// setuser actions
export const setUserRequest = (): ISetUserRequestA => ({
  type: 'SET_USER_REQUEST',
})

export const setUserSuccess = (user: IUser): ISetUserSuccessA => ({
  type: 'SET_USER_SUCCESS',
  payload: {
    user,
  },
})

export const setUserError = (): ISetUserErrorA => ({
  type: 'SET_USER_ERROR',
})
