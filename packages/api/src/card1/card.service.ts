import {Body, Injectable} from '@nestjs/common'
//import Jimp from 'Jimp'
import path from 'path'
import cardids from './cardsinfo'
import {CardDto} from './dto/card.dto'
import captions from './captions'
import { join, resolve,extname } from 'path'
const Jimp=require('jimp')


export interface CardId {
    userCardId:number
  id: number
    card:string
}



export interface Caption {
    id:number
    page: string
    captions: Array<{
        x: number
        y: number


     font: string
    }>
}


@Injectable()
export class CardService {
    private readonly cardservice: CardService




    async Card(@Body() cardDto: CardDto) {

        const generateImage = async (id,Details) => {


            var  image;
           // const cards=cardids.filter(x=>x.id===id)


            const car=await captions.filter(x=>x.id===id)



              for(let k=0;k<car.length;k++) {

                  image = await Jimp.read(resolve('src', 'card1', 'assets', car[k].page))

                  for (let i = 0; i < car[k].captions.length; i++) {


                      const capt = await car[k].captions[i]

                      const font = await Jimp.loadFont(capt.font)

let data=Object.values(Details[k]);

                      await image.print(font, capt.x, capt.y,data[i])
                  }
                  const newFileName = `${car[k].page.replace(extname(car[k].page), '')}-${Date.now()}${extname(car[k].page)}`
                  await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))

              }


        }



        let id = cardDto.id;
        await generateImage(id,cardDto.Details)






    }
}
