import { Body, Controller, Post } from '@nestjs/common'
//import Jimp from 'jimp'
import { Public } from 'src/common/decorators/public.decorator'

import { CardService } from './card.service'
import { CardDto } from './dto/card.dto'
//import {read,loadFont} from 'jimp'
const Jimp = require('jimp')
const path = require('path')

@Public()
@Controller('card')
export class CardController {
  constructor(private readonly cardservice: CardService) {}

  @Post('card')
  create(@Body() cardDto: CardDto) {
    return this.cardservice.Card(cardDto)
  }
}
