import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(26)
  firstName: string

  @IsOptional()
  @IsString()
  @MaxLength(26)
  @MinLength(3)
  lastName?: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string

  @IsOptional()
  @IsString()
  @IsUrl()
  profileImage?: string
}