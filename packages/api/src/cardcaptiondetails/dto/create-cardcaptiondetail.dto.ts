import { IsArray, IsNotEmpty, IsNumber } from 'class-validator'

export class CardsCaptionDto {
  @IsNotEmpty()
  @IsNumber()
  CardId: number

  @IsNotEmpty()
  @IsArray()
  Caption: [
    {
      x: number
      y: number
      font: string
      text: string
    }
  ]
}
