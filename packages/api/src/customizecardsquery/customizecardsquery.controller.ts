import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {Public} from '../common/decorators/public.decorator'
import { CustomizecardsqueryService } from './customizecardsquery.service';
import { CreateCustomizecardsqueryDto } from './dto/create-customizecardsquery.dto';


@Controller('customizecardsquery')
export class CustomizecardsqueryController {
  constructor(private readonly customizecardsqueryService: CustomizecardsqueryService) {}


  @Public()
  @Post()
  create(@Body() createCustomizecardsqueryDto: CreateCustomizecardsqueryDto) {
    return this.customizecardsqueryService.create(createCustomizecardsqueryDto);
  }


  @Public()
  @Get()
  findAll() {
    return this.customizecardsqueryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customizecardsqueryService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customizecardsqueryService.remove(+id);
  }
}
