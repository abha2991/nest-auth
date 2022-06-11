import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'

import { ContactusService } from './contactus.service';
import { ContactusController } from './contactus.controller';
import {Contactus} from './entities/contactus.entity'
@Module({

  imports: [TypeOrmModule.forFeature([Contactus])],
  controllers: [ContactusController],
  providers: [ContactusService],
  exports: [ContactusService]
})
export class ContactusModule {}
