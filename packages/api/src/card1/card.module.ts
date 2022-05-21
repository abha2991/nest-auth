import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '../users/users.module'

import { CardController } from './card.controller'
import { CardService } from './card.service'
import { UserCardEntity } from './entities/usercard.entity'

@Module({
  //imports: [UsersModule],
  imports: [TypeOrmModule.forFeature([UserCardEntity]), UsersModule],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService]
})
export class CardModule1 {}
