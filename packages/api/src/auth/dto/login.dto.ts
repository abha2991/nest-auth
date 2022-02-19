import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { User } from 'src/users/entities/user.entity'

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}

export class LoginResponseDto {
  accessToken: string
  expiry: string
  user: User
}
