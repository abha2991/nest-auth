import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator'
import { Column } from 'typeorm'

export class CreateCustomizecardsqueryDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsPhoneNumber()
  @IsString()
  phoneNumber: string

  @IsNotEmpty()
  @IsString()
  event: string

  @IsNotEmpty()
  @IsString()
  description: string
}
