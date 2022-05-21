import { Injectable } from '@nestjs/common';


import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class VideoredisService {
  constructor(@InjectQueue('video') private videoQueue: Queue) {}


}
