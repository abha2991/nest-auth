import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'

import { Public } from 'src/common/decorators/public.decorator'
import { CardcaptiondetailsService } from './cardcaptiondetails.service'

import { CardsCaptionDto } from './dto/create-cardcaptiondetail.dto'

@Controller('cardcaptiondetails')
export class CardcaptiondetailsController {
  constructor(
    private readonly cardcaptiondetailsService: CardcaptiondetailsService,
    private readonly cardscaptionservice: CardcaptiondetailsService
  ) {}

  @Public()
  @Post()
  create(@Body() createCardCaptiondetailDto: CardsCaptionDto) {
    return this.cardcaptiondetailsService.create(createCardCaptiondetailDto)
  }

  @Public()
  @Get('cardetails')
  findAll() {
    return this.cardcaptiondetailsService.findAll()
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardcaptiondetailsService.findOne(+id);
  // }

  @Public()
  @Get()
  findOne() {
    return this.cardcaptiondetailsService.findOne()
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardcaptiondetailsService.remove(+id)
  }
}
