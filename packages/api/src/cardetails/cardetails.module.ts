import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

import { CardetailsController } from './cardetails.controller'

import { CardetailsService } from './cardetails.service'
import { CardEntity } from './entities/card.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  controllers: [CardetailsController],
  providers: [CardetailsService],
  exports: [CardetailsService]
})
export class CardetailsModule {}
