import { Controller, Get, Param, Res } from '@nestjs/common'
import { Public } from './common/decorators/public.decorator'

@Controller()
export class AppController {
  @Get()
  ping(): string {
    return 'ping'
  }

  @Public()
  @Get('src/card1/generated/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'src/card1/generated' })
  }
}
