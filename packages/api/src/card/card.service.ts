import {Body, Injectable} from '@nestjs/common'
//import Jimp from 'Jimp'
import path from 'path'
import {CardDto} from './dto/card.dto'
import captions from './captions'
import { join, resolve,extname } from 'path'
const Jimp=require('jimp')


export interface Caption {
    file: string
    captions: Array<{
        x: number
        y: number
        text: string

     font: string
    }>
}


@Injectable()
export class CardService {
    private readonly cardservice: CardService

    async Card(@Body() cardDto: CardDto){
       // const cardno=cardDto.cardno;


        let cardno;
let cardata:string[];


        for(let j=0;j<cardDto.cardno.length;j++) {
            cardno=cardDto.cardno[j]




            // var alphas: string[];
            // alphas = [cardDto.text1, cardDto.text2, cardDto.text3, cardDto.text4, cardDto.text5]
            const execute = async (caption: Caption) => {


                const image = await Jimp.read(resolve('src', 'card', 'assets', caption.file))


                for (let i = 0; i < caption.captions.length; i++) {



                    const capt = caption.captions[i]
                    const font = await Jimp.loadFont(capt.font)
                    // const font1 = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);

                    await image.print(font, capt.x, capt.y,cardDto.text[j][i])
                }
                const newFileName = `${caption.file.replace(extname(caption.file), '')}-${Date.now()}${extname(caption.file)}`
                await image.writeAsync(resolve('src', 'card', 'generated', newFileName))
            }

          execute(captions[cardno])
        }


    }


}
