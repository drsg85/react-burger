import { deleteCookie, getCookie, setCookie } from '../../utils/cookie'
import { checkResponse } from '../../utils/getUrl'
import { saveToken } from '../../utils/saveTokens'
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

// register action
export const handleRegister = (form) => (dispatch) => {
  dispatch(registerRequest())

  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(form)

  fetch('https://norma.nomoreparties.space/api/auth/register', {
    method: 'POST',
    headers,
    body,
  })
    .then(checkResponse)
    .then((res) => {
      saveToken(res.accessToken, res.refreshToken)

      dispatch(registerSuccess(res.user))
    })
    .catch(() => dispatch(registerError()))
}

// login action
export const handleLogin = (form) => (dispatch) => {
  dispatch(loginRequest())

  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(form)

  fetch('https://norma.nomoreparties.space/api/auth/login', {
    method: 'POST',
    headers,
    body,
  })
    .then(checkResponse)
    .then((res) => {
      saveToken(res.accessToken, res.refreshToken)

      dispatch(loginSuccess(res.user))
    })
    .catch(() => dispatch(loginError()))
}

// logout action
export const handleLogout = () => (dispatch) => {
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
    .then((res) => {
      deleteCookie('accessToken')
      localStorage.removeItem('refreshToken')

      dispatch(logoutSuccess())
    })
    .catch(() => dispatch(logoutError()))
}

// getuser action
export const handleGetUser = () => (dispatch) => {
  dispatch(getUserRequest())

  const accessToken = 'Bearer '.concat(getCookie('accessToken') || '')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: accessToken,
  }

  fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'GET',
    headers,
  })
    .then(checkResponse)
    .then((res) => {
      dispatch(getUserSuccess(res.user))
    })
    .catch(() => dispatch(getUserError()))
}

// setuser action
export const handleSetUser = (form) => (dispatch) => {
  dispatch(setUserRequest())

  const accessToken = 'Bearer '.concat(getCookie('accessToken') || '')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: accessToken,
  }
  const body = JSON.stringify(form)

  fetch('https://norma.nomoreparties.space/api/auth/user', {
    method: 'PATCH',
    headers,
    body,
  })
    .then(checkResponse)
    .then((res) => {
      dispatch(setUserSuccess(res.user))
    })
    .catch(() => dispatch(setUserError()))
}
