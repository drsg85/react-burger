import { IRefreshTokensResponse } from 'types'
import { checkResponse } from './getUrl'
import { saveTokens } from './saveTokens'

export const refreshTokens = async () => {
  const refreshToken = localStorage.getItem('refreshToken')

  if (refreshToken) {
    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      const body = JSON.stringify({ token: refreshToken })

      const fetchResponse = await fetch(
        'https://norma.nomoreparties.space/api/auth/token',
        {
          method: 'POST',
          headers,
          body,
        },
      )
        .then(checkResponse<IRefreshTokensResponse>)
        .catch((error) => Promise.reject(error))

      saveTokens(fetchResponse.accessToken, fetchResponse.refreshToken)

      return fetchResponse
    } catch (error) {
      console.log('Catch')

      return Promise.reject(error)
    }
  }

  return Promise.reject('Нет refreshToken в LocalStorage!')
}
