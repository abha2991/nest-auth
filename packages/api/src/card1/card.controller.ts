import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { Public } from 'src/common/decorators/public.decorator'

import { CardService } from './card.service'
import { CardDto } from './dto/card.dto'
import { UpdateCardUserDto } from './dto/update-carduser.dto'
//import Jimp from 'jimp'

const Jimp = require('jimp')
const path = require('path')

@Controller('card1')
export class CardController {
  constructor(private readonly cardservice: CardService) {}

  @Post('create')

  // Card(@Body() cardDto: CardDto,@CurrentUser() currentUser: LoggedInUser) {
  //     let email=currentUser.email;
  //     cardDto.email=email;
  //     return this.cardservice.Card(cardDto)
  //
  // }

  // @Public()
  //     Card(@Body() cardDto: CardDto) {
  //       console.log({cardDto})
  //         return this.cardservice.Card(cardDto)
  //
  //     }
  @Public()
  Card(@Body() cardDto: CardDto) {
    console.log({ cardDto })
    return this.cardservice.Card(cardDto)
  }

  //
  //  @Post('createusercard')
  // createUserCard(@Body() usercarddto: UserCardDto) {
  //      return this.cardservice.create(usercarddto.CardName,usercarddto.CardId,usercarddto.UserEmail)
  //  }

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
  @Public()
  @Get('getall')
  findAll() {
    return this.cardservice.findAll()
  }

  @Public()
  @Patch(':id')
  updatepaymentstatus(@Param('id') id: string, @Body() updateUserDto: UpdateCardUserDto) {
    console.log({ updateUserDto })
    return this.cardservice.updatepaymentstatus(id, updateUserDto)
  }

  // @Public()
  //     @Post('getbyemail')
  //     async findByEmail(@Body('email') email: string) {
  //         return this.cardservice.findByEmail(email)
  //     }

  @Public()
  // @Post('getbyuserid')
  // async findOne(@Body('id') UserId:string)
  // {
  //
  //     console.log({UserId})
  //     return this.cardservice.findOne(UserId)
  // }
  @Get(':UserId')
  async find(@Param('UserId') UserId: string) {
    console.log({ UserId })
    //console.log(join(__dirname, '..','src', 'card1','generated'))

    return this.cardservice.find(UserId)
  }

  @Public()
  @Get('getCard/:id')
  findOne(@Param('id') id: string) {
    return this.cardservice.findOne(id)
  }

  @Public()
  @Post('findCardById')
  findById(@Body('id') id: string) {
    console.log({ id })
    return this.cardservice.findById(id)
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardservice.remove(id)
  }
}
