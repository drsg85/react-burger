import { setCookie } from './cookie'

export function saveToken(accessToken, refreshToken) {
  setCookie('accessToken', accessToken.split('Bearer ')[1])
  localStorage.setItem('refreshToken', refreshToken)
}
