import { setCookie } from './cookie'

export function saveTokens(accessToken, refreshToken) {
  setCookie('accessToken', accessToken.split('Bearer ')[1])
  localStorage.setItem('refreshToken', refreshToken)
}
