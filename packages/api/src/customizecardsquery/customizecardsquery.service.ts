import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

import { CreateCustomizecardsqueryDto } from './dto/create-customizecardsquery.dto';
import {Customizecardsquery} from './entities/customizecardsquery.entity'


@Injectable()
export class CustomizecardsqueryService {

  constructor(@InjectRepository(Customizecardsquery) private readonly customizeCardRepository: Repository<Customizecardsquery>) {}
  async create(createCustomizecardsqueryDto: CreateCustomizecardsqueryDto) {
    try {
      const createdData= this.customizeCardRepository.create(createCustomizecardsqueryDto)
      return await this.customizeCardRepository.save(createdData)
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    return  await this.customizeCardRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} customizecardsquery`;
  }



  remove(id: number) {
    return `This action removes a #${id} customizecardsquery`;
  }
}
