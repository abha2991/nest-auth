import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

import { Public } from 'src/common/decorators/public.decorator'
import { CardDetailsDto } from '../cardetails/dto/update-cardDetails.dto'
import { Role } from '../common/decorators/role.decorator'
import { CardcaptiondetailsService } from './cardcaptiondetails.service'

import { CardsCaptionDto } from './dto/create-cardcaptiondetail.dto'
import { CreateCaptionDto } from './dto/create-cardcaptiondetail.dto'

@Controller('cardcaptiondetails')
export class CardcaptiondetailsController {
  constructor(
    private readonly cardcaptiondetailsService: CardcaptiondetailsService,
    private readonly cardscaptionservice: CardcaptiondetailsService
  ) {}

  // @Role('ADMIN')
  @Public()
  @Post()
  create(@Body() createCardCaptiondetailDto: CardsCaptionDto) {
    return this.cardcaptiondetailsService.create(createCardCaptiondetailDto)
  }

  @Get('cardetails')
  findAll() {
    return this.cardcaptiondetailsService.findAll()
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardcaptiondetailsService.findOne(+id);
  // }

  @Get()
  findOne() {
    return this.cardcaptiondetailsService.findOne()
  }

  @Public()
  @Patch(':id')
  updateCaptionDetails(@Param('id') id: string, @Body() captiondetailsdto: CreateCaptionDto) {
    return this.cardcaptiondetailsService.updateCaptionDetails(id, captiondetailsdto)
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardcaptiondetailsService.remove(+id)
  }
}
