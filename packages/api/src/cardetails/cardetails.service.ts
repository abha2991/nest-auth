import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CardcaptionEntity } from '../cardcaptiondetails/entities/cardcaption.entity'
import { CreateCardetailDto } from './dto/create-cardetail.dto'
import { CardEntity } from './entities/card.entity'

@Injectable()
export class CardetailsService {
  constructor(@InjectRepository(CardEntity) private readonly cardsRepository: Repository<CardEntity>) {}

  async create(createCardetailDto: CreateCardetailDto) {
    try {
      const createdCard = this.cardsRepository.create(createCardetailDto)
      return await this.cardsRepository.save(createdCard)
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }
  }

  findAll(relations: string[] = []) {
    return this.cardsRepository.find({ relations })
  }



  // async findOne(id: number) {
  //   return await this.cardsRepository.findOne({
  //     where: { id },
  //     relations: [ 'CardcaptionEntity' ],
  // })
  // }


  // async findbyid(UserId: string) {
  //   return await this.cardsRepository.findOneOrFail(UserId);
  // }

  async findOne() {
    return await this.cardsRepository.findOne({
      relations: ['Caption']
    })
  }

  async find(id: string) {
    return await this.cardsRepository.findOne(id,{
      relations: ['Caption']
    })
  }


  remove(id: number) {
    return `This action removes a #${id} cardetail`
  }
}
