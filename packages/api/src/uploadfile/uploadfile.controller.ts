import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { LoggedInUser } from '../auth/auth.interface'
import CurrentUser from '../common/decorators/current-user.decorator'
import { UploadfileService } from './uploadfile.service'
import { Public } from 'src/common/decorators/public.decorator'
import { CreateUploadfileDto } from './dto/create-uploadfile.dto'
import { multerOptions } from '../config/multer'

@Controller('uploadfile')
export class UploadfileController {
  constructor(private readonly uploadfileService: UploadfileService) {}

  @Post(':folder')
  // @UseInterceptors(FileInterceptor('file', multerOptions))
  // async upload() {
  //   return this.uploadfileService.upload(createUploadFileDto)
  // }
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async upload(@Param('folder') folder: string, @UploadedFile() file, @CurrentUser() currentUser: LoggedInUser) {
    console.log(folder)
    let createFile

    let fileName = file.filename
    createFile = { fileName, file }
    return this.uploadfileService.save(folder, createFile, currentUser.id)
  }
  @Public()
  @Get()
  findAll() {
    return this.uploadfileService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadfileService.findOne(+id)
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadfileService.remove(+id)
  }
}
