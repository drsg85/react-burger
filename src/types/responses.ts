import { IIngredient } from './ingredientTypes'
import { IUser } from './userTypes'

export interface IIngredientsRespose {
  succes: boolean
  data: IIngredient[]
}

export interface IRegisterResponse {
  success: boolean
  user: IUser
  accessToken: string
  refreshToken: string
}

export interface ILoginResponse {
  success: boolean
  user: IUser
  accessToken: string
  refreshToken: string
}

export interface IErrorResponse {
  success: boolean
  message: string
}

export interface IRefreshTokensResponse {
  success: boolean
  accessToken: string
  refreshToken: string
}

export interface IGetUserResponse {
  success: boolean
  user: IUser
}

export interface ISetUserResponse {
  success: boolean
  user: IUser
}

export interface IFetchOrderResponse {
  success: boolean
  name: string
  order: {
    ingredients: IIngredient[]
    _id: string
    owner: {
      name: string
      email: string
      createdAt: Date
      updatedAt: Date
    }
    status: 'done'
    name: string
    createdAt: Date
    updatedAt: Date
    number: number
    price: number
  }
}
