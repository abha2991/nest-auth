import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthConfig } from 'src/config/auth'
import { LoggedInUser, TokenPayload } from '../auth.interface'

const cookieExtractor = (req: Request): string | null => {
  let token = null
  if (req && req.cookies) {
    token = req.cookies.token
  }
  return token
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor, ExtractJwt.fromAuthHeaderAsBearerToken()]),
      ignoreExpiration: false,
      secretOrKey: configService.get<AuthConfig>('auth').secret
    })
  }

  async validate(payload: TokenPayload): Promise<LoggedInUser> {
    return { id: payload.sub, email: payload.email, role: payload.role }
  }
}
