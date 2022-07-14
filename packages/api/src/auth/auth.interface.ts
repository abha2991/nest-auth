export interface LoggedInUser {
  role: string
  email: string
  id: string
}

export interface TokenPayload extends Omit<LoggedInUser, 'id'> {
  sub: string
}
