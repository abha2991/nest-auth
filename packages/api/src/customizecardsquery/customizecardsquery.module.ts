import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

import { CustomizecardsqueryService } from './customizecardsquery.service';
import { CustomizecardsqueryController } from './customizecardsquery.controller';
import {Customizecardsquery} from './entities/customizecardsquery.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Customizecardsquery])],
  controllers: [CustomizecardsqueryController],
  providers: [CustomizecardsqueryService],
  exports:[CustomizecardsqueryService]
})
export class CustomizecardsqueryModule {}
