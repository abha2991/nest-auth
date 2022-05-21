import { InjectQueue } from '@nestjs/bull'
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Public } from '../common/decorators/public.decorator'
import { Queue } from 'bull'
import { Job } from 'bull'
import { CreateVideorediDto } from './dto/create-videoredi.dto'
import captions from './caption'

@Public()
@Controller('videoredis')
export class VideoredisController {
  constructor(@InjectQueue('video-queue') private videoQueue: Queue) {}

  @Post('video')
  VideoQueue(@Body() body: CreateVideorediDto) {
    this.videoQueue.add(body.videoid)

  }
}
