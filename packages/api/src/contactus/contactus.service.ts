import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateContactusDto } from './dto/create-contactus.dto'
import { Contactus } from './entities/contactus.entity'

@Injectable()
export class ContactusService {
  constructor(@InjectRepository(Contactus) private readonly contactUsRepository: Repository<Contactus>) {}
  async create(createContactusDto: CreateContactusDto) {
    try {
      const createdData = this.contactUsRepository.create(createContactusDto)
      return await this.contactUsRepository.save(createdData)
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    return await this.contactUsRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} contactus`
  }

  async remove(id: string) {
    try {
      await this.contactUsRepository.delete(id)

      return {
        success: true,
        message: 'Successfully Deleted'
      }
    } catch (e) {
      console.log({ e })
    }
  }
}
