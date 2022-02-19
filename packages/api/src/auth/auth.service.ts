import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as moment from 'moment'
import { UsersService } from 'src/users/users.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { User } from 'src/users/entities/user.entity'
import { TokenPayload } from './auth.interface'
import { LoginDto, LoginResponseDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByCredentials(loginDto.email, loginDto.password)
    return this.createToken(user)
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto)
    return this.createToken(user)
  }

  async socialLogin(createUserDto: CreateUserDto) {
    let user = await this.usersService.findByEmail(createUserDto.email)
    if (!user) {
      user = await this.usersService.create(createUserDto)
    }
    return this.createToken(user)
  }

  private createToken(user: User): LoginResponseDto {
    const payload: TokenPayload = { sub: user.id.toString(), email: user.email }
    const accessToken = this.jwtService.sign(payload)
    const { exp } = this.jwtService.decode(accessToken) as Record<string, any>
    return { user, accessToken, expiry: moment(exp * 1000).toISOString() }
  }
}
