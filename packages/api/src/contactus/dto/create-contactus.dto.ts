import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator'
export class CreateContactusDto {
  @IsNotEmpty()
  @IsString()
  Name: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  Message: string

  @IsPhoneNumber()
  @IsString()
  phoneNumber: string
}
