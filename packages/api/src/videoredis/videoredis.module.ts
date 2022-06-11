import { BullModule } from '@nestjs/bull'
import { Module } from '@nestjs/common'
import { VideoredisController } from './videoredis.controller'
import { VideoredisProcessor } from './videoredis.processor'

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
