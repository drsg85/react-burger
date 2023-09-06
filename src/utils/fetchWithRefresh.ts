// Types
import { IErrorResponse } from 'types'

import { checkResponse } from './getUrl'
import { refreshTokens } from './refreshTokens'

export const fetchWithRefresh = async <T>(
  url: string,
  options: RequestInit,
) => {
  try {
    const res = await fetch(url, options)
    return await checkResponse<T>(res)
  } catch (err) {
    const error = err as IErrorResponse

    if (error.message === 'jwt expired') {
      const freshData = await refreshTokens()

      console.log('Error after refresh')

      if (freshData) {
        const freshOptions = {
          ...options,
          headers: {
            ...options.headers,
            Authorization: freshData.accessToken,
          },
        }

        return fetch(url, freshOptions).then(checkResponse<T>)
      }
    }

    return Promise.reject(error)
  }
}
