import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CardcaptiondetailsController } from './cardcaptiondetails.controller'

import { CardcaptiondetailsService } from './cardcaptiondetails.service'
import { CardcaptionEntity } from './entities/cardcaption.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CardcaptionEntity])],
  controllers: [CardcaptiondetailsController],
  providers: [CardcaptiondetailsService],
  exports: [CardcaptiondetailsService]
})
export class CardcaptiondetailsModule {}
