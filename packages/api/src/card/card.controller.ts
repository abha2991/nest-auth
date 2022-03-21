import {Body, Controller, Get, Post} from '@nestjs/common'
//import Jimp from 'jimp'
import {resolve} from 'path'
import {CreateUserDto} from '../users/dto/create-user.dto'
import captions from './captions'
//import {read,loadFont} from 'jimp'
const Jimp = require('jimp');
const path=require('path');
import { Public } from 'src/common/decorators/public.decorator'


import {Caption, CardService} from './card.service'
import {CardDto} from './dto/card.dto'


@Public()
@Controller('card')
export class CardController {
    constructor(private readonly cardservice: CardService) {}
    @Post('card')
    create(@Body() cardDto: CardDto) {
        return this.cardservice.Card(cardDto)
    }

}
