import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import CurrentUser from 'src/common/decorators/current-user.decorator'
import { Public } from 'src/common/decorators/public.decorator'
import { AppConfig } from 'src/config/app'
import { UsersService } from 'src/users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { LoggedInUser } from './auth.interface'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { Response } from 'express'

@Controller()
export class AuthController {
  private readonly appConfig: AppConfig

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {
    this.appConfig = this.configService.get<AppConfig>('app')
  }

  @Get('me')
  viewer(@CurrentUser() currentUser: LoggedInUser) {
    return this.usersService.findOne(currentUser.id)
  }

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response: Response) {
    const data = await this.authService.login(loginDto)
    response.cookie('token', data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(data.expiry)
    })
    return data
  }

  @Public()
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) response: Response) {
    const data = await this.authService.register(createUserDto)
    response.cookie('token', data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(data.expiry)
    })
    return data
  }
}
