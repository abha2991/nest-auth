import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as moment from 'moment'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { User } from 'src/users/entities/user.entity'
import { UsersService } from 'src/users/users.service'
import { TokenPayload } from './auth.interface'
import { LoginDto, LoginResponseDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByCredentials(loginDto.email, loginDto.password)

    return await this.createToken(user)
  }

  async register(createUserDto: CreateUserDto) {
    try {
      const createdUser = await this.usersService.findByEmail(createUserDto.email)
      if (createdUser) {
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            status: 'Failed',
            message: 'Email Already Exists'
          },
          HttpStatus.BAD_REQUEST
        )
      }

      const user = await this.usersService.create(createUserDto)

      return this.createToken(user)
    } catch (e) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          status: 'Failed',
          message: e.message
        },
        HttpStatus.BAD_REQUEST
      )
    }
  }

  async socialLogin(socialUser: Partial<User>) {
    let user = await this.usersService.findByEmail(socialUser.email)
    if (!user) {
      user = await this.usersService.create(socialUser)
    }
    return this.createToken(user)
  }

  private createToken(user: User): LoginResponseDto {
    const payload: TokenPayload = { sub: user.id.toString(), email: user.email, role: user.role }
    const accessToken = this.jwtService.sign(payload)
    const { exp } = this.jwtService.decode(accessToken) as Record<string, any>
    return { user, accessToken, expiry: moment(exp * 1000).toISOString() }
  }
}
