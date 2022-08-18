import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Uploadfile } from './entities/uploadfile.entity'
import { UploadfileService } from './uploadfile.service'
import { UploadfileController } from './uploadfile.controller'
import { UsersModule } from 'src/users/users.module'

@Module({
  imports: [MulterModule.register({ dest: './uploads' }), TypeOrmModule.forFeature([Uploadfile]), UsersModule],
  controllers: [UploadfileController],
  providers: [UploadfileService],
  exports: [UploadfileService]
})
export class UploadfileModule {}
