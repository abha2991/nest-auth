export interface IUser {
  id: string
  email: string
  firstName: string
  lastName?: string
  phoneNumber?: string
  profileImage?: string
  createdAt: string
  updatedAt: string
  provider:string
}
