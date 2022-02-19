import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Profile, Strategy } from 'passport-facebook'
import { AppConfig } from 'src/config/app'
import { FacebookConfig } from 'src/config/facebook'
import { CreateUserDto } from 'src/users/dto/create-user.dto'

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private configService: ConfigService) {
    super({
      ...configService.get<FacebookConfig>('facebook'),
      callbackURL: `${configService.get<AppConfig>('app').apiUrl}/auth/facebook/callback`,
      scope: 'email',
      profileFields: ['emails', 'name', 'photos']
    })
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile): Promise<Partial<CreateUserDto>> {
    const { name, emails, photos } = profile
    return {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      profileImage: photos[0].value
    }
  }
}
