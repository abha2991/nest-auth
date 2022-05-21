import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {User} from '../users/entities/user.entity'

import {CardcaptionEntity} from './entities/cardcaption.entity'

import { CardsCaptionDto  } from './dto/create-cardcaptiondetail.dto';
import {CardEntity} from '../cardetails/entities/card.entity'


@Injectable()
export class CardcaptiondetailsService {

  constructor(@InjectRepository(CardcaptionEntity) private readonly cardsRepository: Repository<CardcaptionEntity>) {}
  async create(createCardCaptiondetailDto:CardsCaptionDto) {
    try {
      const createdCard = this.cardsRepository.create(createCardCaptiondetailDto)
      return await this.cardsRepository.save(createdCard)
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }

  }

  findAll(relations: string[] = []) {
    return this.cardsRepository.find({ relations })
  }

  async findOne() {
    return await this.cardsRepository.findOne({

      relations: [ 'CardEntity' ],
    })
  }


  remove(id: number) {
    return `This action removes a #${id} cardetail`;
  }
}


