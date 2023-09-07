// Utils
import { getCookie } from './cookie'
import { fetchWithRefresh } from './fetchWithRefresh'
import { ORDER_URL } from './constants'

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok
    ? (res.json() as Promise<T>)
    : res.json().then((err) => Promise.reject(err))
}

export const fetchOrder = <T>(ingredients: string[]) => {
  const accessToken = 'Bearer '.concat(getCookie('accessToken') || '')

  return fetchWithRefresh<T>(ORDER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ ingredients }),
  })
}
