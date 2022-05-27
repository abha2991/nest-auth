import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

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
    CardDetails: string[]

    @IsNotEmpty()
    @IsArray()
    CardTemplates: string[]

    @IsOptional()
    @IsNumber()
    CardSalePrice?: number

    @IsNotEmpty()
    @IsNumber()
    NoOfPages: number
}
