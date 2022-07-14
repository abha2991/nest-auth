import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Role } from '../common/decorators/role.decorator'
import { ContactusService } from './contactus.service'
import { CreateContactusDto } from './dto/create-contactus.dto'
import { Public } from '../common/decorators/public.decorator'

@Controller('contactus')
export class ContactusController {
  constructor(private readonly contactusService: ContactusService) {}

  @Public()
  @Post()
  create(@Body() createContactusDto: CreateContactusDto) {
    return this.contactusService.create(createContactusDto)
  }

  @Role('ADMIN')
  @Get()
  findAll() {
    return this.contactusService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactusService.findOne(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactusService.remove(+id)
  }
}
