import { InjectQueue } from '@nestjs/bull'
import { Injectable } from '@nestjs/common'

import { Queue } from 'bull'

@Injectable()
export class VideoredisService {
  constructor(@InjectQueue('video') private videoQueue: Queue) {}
}
