import {IsArray, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength} from 'class-validator'

export class CreateCardetailDto {



    @IsNotEmpty()
    @IsString()

    CardName: string

    @IsNotEmpty()
    @IsString()
    CardCategory: string


    @IsNotEmpty()
    @IsNumber()
    CardTotalPrice: number


@IsNotEmpty()
@IsArray()
CardDetails:string[]

    @IsOptional()
    @IsNumber()
    CardSalePrice?: number

    @IsNotEmpty()
    @IsNumber()
    NoOfPages: number
}



