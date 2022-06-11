import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateCardetailDto {
  @IsNotEmpty()
  @IsString()
  cardName: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  cardCategory: string

  @IsNotEmpty()
  @IsNumber()
  cardTotalPrice: number

  @IsNotEmpty()
  @IsArray()
  cardDetails: string[]

  @IsNotEmpty()
  @IsArray()
  cardTemplates: string[]

  @IsOptional()
  @IsNumber()
  cardSalePrice?: number

  @IsNotEmpty()
  @IsNumber()
  noOfPages: number

  // @IsNotEmpty()
  // @IsString()
  // CardName: string
  //
  // @IsNotEmpty()
  // @IsString()
  // CardCategory: string
  //
  // @IsNotEmpty()
  // @IsNumber()
  // CardTotalPrice: number
  //
  // @IsNotEmpty()
  // @IsArray()
  // CardDetails: string[]
  //
  // @IsOptional()
  // @IsNumber()
  // CardSalePrice?: number
  //
  // @IsNotEmpty()
  // @IsNumber()
  // NoOfPages: number
}
