import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

import { CardcaptiondetailsService } from './cardcaptiondetails.service';
import { CardcaptiondetailsController } from './cardcaptiondetails.controller';
import {CardcaptionEntity} from './entities/cardcaption.entity'
import {CardEntity} from '../cardetails/entities/card.entity'


@Module({
  imports: [TypeOrmModule.forFeature([CardcaptionEntity,CardEntity])],
  controllers: [CardcaptiondetailsController],
  providers: [CardcaptiondetailsService],
  exports:[CardcaptiondetailsService]
})
export class CardcaptiondetailsModule {}
