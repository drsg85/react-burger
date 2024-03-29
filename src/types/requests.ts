export interface IRegisterRequest {
  name: string
  email: string
  password: string
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface ISetUserRequest {
  name: string
  email: string
  password: string
}
