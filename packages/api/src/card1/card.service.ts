import {Body, Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {InjectRepository} from '@nestjs/typeorm'
import {hashSync} from 'bcrypt'

import { UserCardEntity } from './entities/usercard.entity'
//import Jimp from 'Jimp'
import path from 'path'
import {Repository} from 'typeorm'

import {CardDto} from './dto/card.dto'
import captions from './captions'
import { join, resolve,extname } from 'path'
import {UsersService} from '../users/users.service'


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
   constructor(private readonly usersService: UsersService,@InjectRepository(UserCardEntity) private readonly usersCardRepository: Repository<UserCardEntity>) {}






    async Card(@Body() cardDto: CardDto) {
console.log({cardDto})
        const generateImage = async (id,Details,userid) => {
            let fileName=[]
            var  image;
            const car=await captions.filter(x=>x.id===id)
            let k;

            console.log({id,Details,userid})
              for(k=0;k<car.length;k++) {

                  image = await Jimp.read(resolve('src', 'card1', 'assets', car[k].page))


                  for (let i = 0; i < car[k].captions.length; i++) {


                      const capt = await car[k].captions[i]

                      console.log({capt})

                      const font = await Jimp.loadFont(capt.font)


//console.log(`${k}-${i}-${data[i]}`)
//                       let frontPageData=[];
//                       frontPageData.push(data[0])
//                       frontPageData.push(data[2])
//                       console.log(data[i])
//                       console.log(frontPageData)

                      let data=Object.values(Details[k]);
                     console.log({data,Details})
if(data[i]) {
    let b=await image.print(font, capt.x, capt.y, data[i])
    console.log({b})
}
else
{

}
                  }
                  const newFileName = `${car[k].page.replace(extname(car[k].page), '')}-${Date.now()}${extname(car[k].page)}`

                  await image.writeAsync(resolve('src', 'card1', 'generated', newFileName))

                  fileName.push(newFileName)


                  //let user = await this.usersService.findByEmail(email)
                  //console.log({user})



              }

const user=new UserCardEntity();
              user.UserId=userid;
              user.CardType="WeddingInvitation";
             user.CardNames=fileName;

             user.Text=Details;
             user.CardId=id;
            const createdUser = this.usersCardRepository.create(user)
            console.log({createdUser})

            return this.usersCardRepository.save(createdUser)

        }



        let id = cardDto.id;
      let userid=cardDto.UserId;
        return await generateImage(id,cardDto.Details,userid)

}






    findAll(relations: string[] = []) {
        return this.usersCardRepository.find({ relations })
    }

    findById(id: string, relations: string[] = []) {
        return this.usersCardRepository.findOne({id}, { relations })
    }

    async find(UserId: string) {
        return await this.usersCardRepository.find({UserId});
    }

    async updatepaymentstatus(id:string, data: any): Promise<any> {
        try {
            console.log({id,data});
            await this.usersCardRepository.update(id, data);

            return {
                success: true,
                message: 'Successfully updated Payment Status',
            };
        } catch (err) {
            console.log({err})
        }
    }


    async findOne(id: string) {
        return await this.usersCardRepository.findOne(id);
    }
    remove(id: string) {
        return this.usersCardRepository.delete(id)
    }
}
