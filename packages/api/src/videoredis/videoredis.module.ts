import { Module } from '@nestjs/common'
import { VideoredisService } from './videoredis.service'
import { VideoredisController } from './videoredis.controller'
import { VideoredisProcessor } from './videoredis.processor'
import { BullModule } from '@nestjs/bull'

@Module({
  controllers: [VideoredisController],
  providers: [VideoredisProcessor],
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        // port: 6379
        port: 59442
      }
    }),
    BullModule.registerQueue({
      name: 'video-queue'
    })
  ]
})
export class VideoredisModule {}
