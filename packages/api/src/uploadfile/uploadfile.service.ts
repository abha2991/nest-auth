import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { join } from 'path'
import { Repository } from 'typeorm'
import { CreateUploadfileDto } from './dto/create-uploadfile.dto'
import { Uploadfile } from './entities/uploadfile.entity'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class UploadfileService {
  constructor(
    @InjectRepository(Uploadfile) private readonly uploadFileRepository: Repository<Uploadfile>,
    private readonly usersService: UsersService
  ) {}
  // @UseInterceptors(FileInterceptor('file', multerOptions))
  // async upload(@UploadedFile() file) {
  //   return { file, status: 'Success', message: 'Uploaded Successfully' }
  // }

  async save(folder, createUploadFileDto: CreateUploadfileDto, userId) {
    try {
      let profileImage = createUploadFileDto.fileName

      if (folder === 'ProfilePic') {
        const userProfile = await this.usersService.update(userId, { profileImage })
      }

      await this.uploadFileRepository.save(createUploadFileDto)
    } catch (e) {
      throw new Error(e)
    }
    return {
      status: 'Success',
      message: 'Updated Successfully',
      statusCode: HttpStatus.OK
    }
  }

  async findAll() {
    const data = await this.uploadFileRepository.find()
    return {
      data,
      status: 'Success',
      message: 'Fetched Successfully',
      statusCode: HttpStatus.OK
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadfile`
  }

  remove(id: number) {
    return this.uploadFileRepository.delete(id)
  }
}
