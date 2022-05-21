import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

import { CardetailsService } from './cardetails.service';
import { CardetailsController } from './cardetails.controller';
import {CardEntity} from './entities/card.entity'
import {CardcaptionEntity} from '../cardcaptiondetails/entities/cardcaption.entity'
import {CardcaptiondetailsModule} from '../cardcaptiondetails/cardcaptiondetails.module'


@Module({
  imports: [TypeOrmModule.forFeature([CardEntity,CardcaptionEntity])],
  controllers: [CardetailsController],
  providers: [CardetailsService],
  exports:[CardetailsService]
})
export class CardetailsModule {}
