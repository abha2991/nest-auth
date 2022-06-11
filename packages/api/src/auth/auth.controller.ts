import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthGuard } from '@nestjs/passport'
import { Response } from 'express'
import CurrentUser from 'src/common/decorators/current-user.decorator'
import { Public } from 'src/common/decorators/public.decorator'
import { AppConfig } from 'src/config/app'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { User } from 'src/users/entities/user.entity'
import { UsersService } from 'src/users/users.service'
import { LoggedInUser } from './auth.interface'
import { AuthService } from './auth.service'
import { LoginDto, LoginResponseDto } from './dto/login.dto'

@Controller('auth')
export class AuthController {
  private readonly appConfig: AppConfig

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {
    this.appConfig = this.configService.get<AppConfig>('app')
  }

  private static loginResponse(data: LoginResponseDto, response: Response) {
    response.cookie('token', data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(data.expiry)
    })
    return data
  }

  @Get('me')
  viewer(@CurrentUser() currentUser: LoggedInUser) {
    return this.usersService.findOne(currentUser.id)
  }

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) response: Response) {
    const data = await this.authService.login(loginDto)
    return AuthController.loginResponse(data, response)
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('token')
  }

  @Public()
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) response: Response) {
    const data = await this.authService.register(createUserDto)
    return AuthController.loginResponse(data, response)
  }

  @Public()
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() {}

  @Public()
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req, @Res({ passthrough: true }) response: Response) {
    const data = await this.authService.socialLogin(req.user as Partial<User>)
    AuthController.loginResponse(data, response)
    response.redirect(302, this.appConfig.appUrl)
  }

  @Public()
  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  facebookAuth() {}

  @Public()
  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthCallback(@Req() req, @Res({ passthrough: true }) response: Response) {
    const data = await this.authService.socialLogin(req.user as Partial<User>)
    AuthController.loginResponse(data, response)
    response.redirect(302, this.appConfig.appUrl)
  }
}
