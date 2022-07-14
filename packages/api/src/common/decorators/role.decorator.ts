import { SetMetadata } from '@nestjs/common'

export const IS_ROLE_KEY = 'role'
export const Role = (role: string) => SetMetadata(IS_ROLE_KEY, role)
