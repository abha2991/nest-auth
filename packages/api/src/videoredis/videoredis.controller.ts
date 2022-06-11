import { InjectQueue } from '@nestjs/bull'
import { Body, Controller, Post } from '@nestjs/common'
import { Queue } from 'bull'
import { Public } from '../common/decorators/public.decorator'
import { CreateVideorediDto } from './dto/create-videoredi.dto'

@Public()
@Controller('videoredis')
export class VideoredisController {
  constructor(@InjectQueue('video-queue') private videoQueue: Queue) {}

  @Post('video')
  VideoQueue(@Body() body: CreateVideorediDto) {
    this.videoQueue.add(body.videoid)
  }
}
