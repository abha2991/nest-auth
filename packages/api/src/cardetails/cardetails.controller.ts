import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

import { Public } from 'src/common/decorators/public.decorator'
import { Role } from '../common/decorators/role.decorator'

import { CardetailsService } from './cardetails.service'

import { CreateCardetailDto } from './dto/create-cardetail.dto'
import { CardDetailsDto } from './dto/update-cardDetails.dto'

@Controller('cardetails')
export class CardetailsController {
  constructor(private readonly cardetailsService: CardetailsService) {}

  @Role('ADMIN')
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

  @Get()
  findOne() {
    return this.cardetailsService.findOne()
  }

  @Post('getById')
  find(@Body('id') id: string) {
    return this.cardetailsService.find(id)
  }

  @Patch(':id')
  updateCardDetails(@Param('id') id: string, @Body() carddetailsdto: CardDetailsDto) {
    return this.cardetailsService.updateCardDetails(id, carddetailsdto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardetailsService.remove(+id)
  }
}
