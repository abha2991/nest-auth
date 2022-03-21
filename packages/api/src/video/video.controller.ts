import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import {CardDto} from '../card/dto/card.dto'
import {Public} from '../common/decorators/public.decorator'
import { VideoService } from './video.service';
import { VideoDto } from './dto/create-video.dto';


@Public()
@Controller('video')


export class VideoController {
  constructor(private readonly videoService: VideoService) {}
  @Post('create')
  create(@Body() videoDto: VideoDto) {
    return this.videoService.Video(videoDto)
  }


}

// export class VideoController {
//   constructor(private readonly videoService: VideoService) {}
//
//   @Post()
//   create(@Body() createVideoDto: CreateVideoDto) {
//     return this.videoService.create(createVideoDto);
//   }
//
//   @Get()
//   findAll() {
//     return this.videoService.findAll();
//   }
//
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.videoService.findOne(+id);
//   }
//
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
//     return this.videoService.update(+id, updateVideoDto);
//   }
//
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.videoService.remove(+id);
//   }
// }
