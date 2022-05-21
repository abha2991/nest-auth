import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardetailsService } from './cardetails.service';

import { CreateCardetailDto } from './dto/create-cardetail.dto';

import { Public } from 'src/common/decorators/public.decorator'

@Controller('cardetails')
export class CardetailsController {
  constructor(private readonly cardetailsService: CardetailsService) {}

  @Public()
  @Post()
  create(@Body() createCardetailDto: CreateCardetailDto) {
    return this.cardetailsService.create(createCardetailDto);
  }




  @Public()
  @Get('cardetails')
  findAll() {
    return this.cardetailsService.findAll();
  }


  // @Public()
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardetailsService.findOne(+id);
  // }

  @Public()
  @Get()
  findOne()  {
    return this.cardetailsService.findOne();
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardetailsService.remove(+id);
  }
}