import { setCookie } from './cookie'

export function saveTokens(accessToken: string, refreshToken: string) {
  setCookie('accessToken', accessToken.split('Bearer ')[1])
  localStorage.setItem('refreshToken', refreshToken)
}
