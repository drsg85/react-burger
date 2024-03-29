import { AppThunk } from 'redux/store'

// Types
import {
  IGetUserResponse,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  ISetUserRequest,
  ISetUserResponse,
} from 'types'

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
  setUserRequest,
  setUserSuccess,
  setUserError,
} from '../actionCreators/authActionCreators'

// Utils
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie'
import { fetchWithRefresh } from '../../utils/fetchWithRefresh'
import { checkResponse } from '../../utils/getUrl'
import { saveTokens } from '../../utils/saveTokens'

// register action
export const handleRegister =
  (form: IRegisterRequest): AppThunk =>
  (dispatch) => {
    dispatch(registerRequest())

    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(form)

    fetch('https://norma.nomoreparties.space/api/auth/register', {
      method: 'POST',
      headers,
      body,
    })
      .then(checkResponse<IRegisterResponse>)
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken)

        dispatch(registerSuccess(res.user))
      })
      .catch(() => dispatch(registerError()))
  }

// login action
export const handleLogin =
  (form: ILoginRequest): AppThunk =>
  (dispatch) => {
    dispatch(loginRequest())

    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(form)

    fetch('https://norma.nomoreparties.space/api/auth/login', {
      method: 'POST',
      headers,
      body,
    })
      .then(checkResponse<ILoginResponse>)
      .then((res) => {
        saveTokens(res.accessToken, res.refreshToken)

        dispatch(loginSuccess(res.user))
      })
      .catch(() => dispatch(loginError()))
  }

// logout action
export const handleLogout = (): AppThunk => (dispatch) => {
  dispatch(logoutRequest())

  const refreshToken = localStorage.getItem('refreshToken')

  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify({
    token: refreshToken,
  })

  fetch('https://norma.nomoreparties.space/api/auth/logout', {
    method: 'POST',
    headers,
    body,
  })
    .then(checkResponse)
    .then(() => {
      deleteCookie('accessToken')
      localStorage.removeItem('refreshToken')

      dispatch(logoutSuccess())
    })
    .catch(() => dispatch(logoutError()))
}

// getuser action
export const handleGetUser = (): AppThunk => (dispatch) => {
  const rawAccessToken = getCookie('accessToken')
  const accessToken = rawAccessToken && 'Bearer '.concat(rawAccessToken)



  if (!accessToken) {
    dispatch(getUserError())
    
    return
  }

  dispatch(getUserRequest())

  const headers = {
    'Content-Type': 'application/json',
    Authorization: accessToken,
  }

  fetchWithRefresh<IGetUserResponse>(
    'https://norma.nomoreparties.space/api/auth/user',
    {
      method: 'GET',
      headers,
    },
  )
    .then((res) => {
      dispatch(getUserSuccess(res.user))
    })
    .catch(() => {
      console.log('Error in redux')

      dispatch(getUserError())
    })
}

// setuser action
export const handleSetUser =
  (form: ISetUserRequest): AppThunk =>
  (dispatch) => {
    dispatch(setUserRequest())

    const accessToken = 'Bearer '.concat(getCookie('accessToken') || '')

    const headers = {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    }
    const body = JSON.stringify(form)

    fetchWithRefresh<ISetUserResponse>(
      'https://norma.nomoreparties.space/api/auth/user',
      {
        method: 'PATCH',
        headers,
        body,
      },
    )
      .then((res) => {
        dispatch(setUserSuccess(res.user))
      })
      .catch(() => dispatch(setUserError()))
  }
