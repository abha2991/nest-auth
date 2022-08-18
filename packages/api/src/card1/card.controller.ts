import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common'
import { Public } from 'src/common/decorators/public.decorator'
import { Role } from '../common/decorators/role.decorator'

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
  Card(@Body() cardDto: CardDto) {
    return this.cardservice.Card(cardDto)
  }

  @Post('preview')
  PreviewCard(@Body() cardDto: CardDto) {
    return this.cardservice.PreviewCard(cardDto)
  }

  @Post('weddingcard')
  WeddingCard(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard(cardDto)
  }

  @Post('weddingcard1')
  WeddingCard1(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard1(cardDto)
  }

  @Post('weddingcard2')
  WeddingCard2(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard2(cardDto)
  }

  @Post('weddingcard3')
  WeddingCard3(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard3(cardDto)
  }

  @Post('weddingcard4')
  WeddingCard4(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard4(cardDto)
  }

  @Post('weddingcard5')
  WeddingCard5(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard5(cardDto)
  }

  @Post('weddingcard6')
  WeddingCard6(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard6(cardDto)
  }

  @Post('weddingcard7')
  WeddingCard7(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard7(cardDto)
  }

  @Post('weddingcard8')
  WeddingCard8(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard8(cardDto)
  }

  @Post('weddingcard9')
  WeddingCard9(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard9(cardDto)
  }

  @Post('weddingcard10')
  WeddingCard10(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard10(cardDto)
  }
  @Post('weddingcard11')
  WeddingCard11(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard11(cardDto)
  }

  @Post('weddingcard12')
  WeddingCard12(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard12(cardDto)
  }

  @Post('weddingcard13')
  WeddingCard13(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard13(cardDto)
  }

  @Post('weddingcard14')
  WeddingCard14(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard14(cardDto)
  }

  @Post('weddingcard15')
  WeddingCard15(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard15(cardDto)
  }

  @Post('weddingcard16')
  WeddingCard16(@Body() cardDto: CardDto) {
    return this.cardservice.WeddingCard16(cardDto)
  }

  @Post('babyshower')
  BabyShowerCard(@Body() cardDto: CardDto) {
    return this.cardservice.BabyShowerCard(cardDto)
  }

  @Post('babyshower1')
  BabyShowerCard1(@Body() cardDto: CardDto) {
    return this.cardservice.BabyShowerCard1(cardDto)
  }
  @Post('babyshower2')
  BabyShowerCard2(@Body() cardDto: CardDto) {
    return this.cardservice.BabyShowerCard2(cardDto)
  }

  @Post('babyshower3')
  BabyShowerCard3(@Body() cardDto: CardDto) {
    return this.cardservice.BabyShowerCard3(cardDto)
  }

  @Public()
  @Post('congratulationscard')
  CongratulationsCard(@Body() cardDto: CardDto) {
    return this.cardservice.CongratulationsCard(cardDto)
  }

  @Post('thankyoucard')
  ThankYouCard(@Body() cardDto: CardDto) {
    return this.cardservice.ThankYouCard(cardDto)
  }

  @Post('getwellsooncard')
  GetWellSoonCard(@Body() cardDto: CardDto) {
    return this.cardservice.GetWellSoonCard(cardDto)
  }

  @Post('getwellsooncard1')
  GetWellSoonCard1(@Body() cardDto: CardDto) {
    return this.cardservice.GetWellSoonCard1(cardDto)
  }
  @Post('missyoucard')
  MissYouCard(@Body() cardDto: CardDto) {
    return this.cardservice.MissYouCard(cardDto)
  }

  @Post('missyoucard1')
  MissYouCard1(@Body() cardDto: CardDto) {
    return this.cardservice.MissYouCard1(cardDto)
  }

  @Post('missyoucard2')
  MissYouCard2(@Body() cardDto: CardDto) {
    return this.cardservice.MissYouCard2(cardDto)
  }

  @Post('missyoucard3')
  MissYouCard3(@Body() cardDto: CardDto) {
    return this.cardservice.MissYouCard3(cardDto)
  }

  @Post('receptioncard')
  ReceptionCard(@Body() cardDto: CardDto) {
    return this.cardservice.ReceptionCard(cardDto)
  }

  @Post('receptioncard1')
  ReceptionCard1(@Body() cardDto: CardDto) {
    return this.cardservice.ReceptionCard1(cardDto)
  }

  @Post('receptioncard2')
  ReceptionCard2(@Body() cardDto: CardDto) {
    return this.cardservice.ReceptionCard2(cardDto)
  }

  @Post('receptioncard3')
  ReceptionCard3(@Body() cardDto: CardDto) {
    return this.cardservice.ReceptionCard3(cardDto)
  }

  @Post('receptioncard4')
  ReceptionCard4(@Body() cardDto: CardDto) {
    return this.cardservice.ReceptionCard4(cardDto)
  }

  @Post('birthdaycard')
  BirthdayCard(@Body() cardDto: CardDto) {
    return this.cardservice.BirthdayCard(cardDto)
  }

  @Post('birthdaycard1')
  BirthdayCard1(@Body() cardDto: CardDto) {
    return this.cardservice.BirthdayCard1(cardDto)
  }

  @Post('birthdaycard2')
  BirthdayCard2(@Body() cardDto: CardDto) {
    return this.cardservice.BirthdayCard2(cardDto)
  }

  @Post('anniversarycard')
  AnniversaryCard(@Body() cardDto: CardDto) {
    return this.cardservice.AnniversaryCard(cardDto)
  }

  @Post('anniversarycard1')
  AnniversaryCard1(@Body() cardDto: CardDto) {
    return this.cardservice.AnniversaryCard1(cardDto)
  }

  @Post('anniversarycard2')
  AnniversaryCard2(@Body() cardDto: CardDto) {
    return this.cardservice.AnniversaryCard2(cardDto)
  }

  @Post('anniversarycard3')
  AnniversaryCard3(@Body() cardDto: CardDto) {
    return this.cardservice.AnniversaryCard3(cardDto)
  }

  @Post('engagementcard')
  EngagementCard(@Body() cardDto: CardDto) {
    return this.cardservice.EngagementCard(cardDto)
  }

  @Post('engagementcard1')
  EngagementCard1(@Body() cardDto: CardDto) {
    return this.cardservice.EngagementCard1(cardDto)
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
  @Role('ADMIN')
  @Get('getall')
  findAll() {
    return this.cardservice.findAll()
  }

  @Patch(':id')
  updatepaymentstatus(@Param('id') id: string, @Body() updateUserDto: UpdateCardUserDto) {
    return this.cardservice.updatepaymentstatus(id, updateUserDto)
  }

  @Get(':UserId')
  async find(@Param('UserId') UserId: string) {
    return this.cardservice.find(UserId)
  }

  @Get('getCard/:id')
  findOne(@Param('id') id: string) {
    return this.cardservice.findOne(id)
  }

  @Post('findCardById')
  findById(@Body('id') id: string) {
    return this.cardservice.findById(id)
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.cardservice.remove(id)
  }

  @Public()
  @Delete('delete1/:email')
  remove1(@Param('email') email: string) {
    return this.cardservice.remove1(email)
  }
}
