import { checkResponse } from './getUrl'
import { refreshTokens } from './refreshTokens'

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options)
    return await checkResponse(res)
  } catch (error) {
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

        return await fetch(url, freshOptions)
      }
    }

    return Promise.reject(error)
  }
}
