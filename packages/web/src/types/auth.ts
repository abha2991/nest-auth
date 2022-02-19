import { IUser } from './user'

export interface IRegisterRequest {
  firstName: string
  lastName?: string
  phoneNumber?: string
  provider?: string
  profileImage?: string
  email: string
  password: string
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  accessToken: string
  expiry: string
  user: IUser
}
