import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CardsCaptionDto } from './dto/create-cardcaptiondetail.dto'
import { CardcaptionEntity } from './entities/cardcaption.entity'

@Injectable()
export class CardcaptiondetailsService {
  constructor(@InjectRepository(CardcaptionEntity) private readonly cardsRepository: Repository<CardcaptionEntity>) {}

  async create(createCardCaptiondetailDto: CardsCaptionDto) {
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
      relations: ['Card']
    })
  }

  remove(id: number) {
    return `This action removes a #${id} cardetail`
  }
  async find(id: string) {
    let data = await this.cardsRepository.findOneOrFail(
      id,

      {
        relations: ['Card']
      }
    )

    return data
  }

  async updateCaptionDetails(id: string, data: any): Promise<any> {
    try {
      await this.cardsRepository.update(id, data)

      return {
        success: true,
        message: 'Successfully Updated'
      }
    } catch (err) {
      console.log({ err })
    }
  }

  async update(id: string, data: any): Promise<any> {
    try {
      await this.cardsRepository.update(id, data)

      return {
        success: true,
        message: `Successfully updated ${data}`
      }
    } catch (err) {
      console.log({ err })
    }
  }
}
