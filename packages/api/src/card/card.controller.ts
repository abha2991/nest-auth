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
    //
    // ping(): string {
    //
    //     const execute = async (caption: Caption) => {
    //         const image = await Jimp.read(resolve('src','card','assets', caption.file))
    //
    //         for (let i = 0; i < caption.captions.length; i++) {
    //             const capt = caption.captions[i]
    //             const font = await Jimp.loadFont(capt.font)
    //           // const font1 = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    //             await image.print(font, capt.x, capt.y, capt.text)
    //         }
    //
    //         const newFileName = `${caption.file.replace(path.extname(caption.file), '')}-${Date.now()}${path.extname(caption.file)}`
    //         await image.writeAsync(resolve('src','card','generated', newFileName))
    //     }
    //
    //     execute(captions[0])
    //
    //     return "Card"
   // }
}
