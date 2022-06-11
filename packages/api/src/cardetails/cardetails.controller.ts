import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common'

import { Public } from 'src/common/decorators/public.decorator'

import { CardetailsService } from './cardetails.service'

import { CreateCardetailDto } from './dto/create-cardetail.dto'
import {CardDetailsDto} from "./dto/update-cardDetails.dto"

@Controller('cardetails')
export class CardetailsController {
  constructor(private readonly cardetailsService: CardetailsService) {}

  @Public()
  @Post()
  create(@Body() createCardetailDto: CreateCardetailDto) {
    return this.cardetailsService.create(createCardetailDto)
  }

  @Public()
  @Get('cardetails')
  findAll() {
    return this.cardetailsService.findAll()
  }

  // @Public()
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardetailsService.findOne(+id);
  // }

  @Public()
  @Get()
  findOne() {
    return this.cardetailsService.findOne()
  }



  @Public()
  @Post('getById')
  find(@Body('id') id:string) {

    console.log({id})
    return this.cardetailsService.find(id)
  }

  @Public()
  @Patch(':id')
  updateCardDetails(@Param('id') id: string, @Body() carddetailsdto: CardDetailsDto) {
    console.log({ carddetailsdto })
    return this.cardetailsService.updateCardDetails(id, carddetailsdto)
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardetailsService.remove(+id)
  }
}
