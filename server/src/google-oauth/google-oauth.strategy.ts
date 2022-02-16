import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { async } from "rxjs";


@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    configService: ConfigService,
    //private readonly usersService: UsersService,
  ) {
    super({
        // Put config in `.env`
        clientID: "1092159502728-e2mafa2ftgflcnv5snc7h3577p786380.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: 'http://localhost:3000/google/redirect',
        scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails } = profile;

    // Here a custom User object is returned. In the the repo I'm using a UsersService with repository pattern, learn more here: https://docs.nestjs.com/techniques/database
    return {
      provider: 'google',
      providerId: id,
      name: name.givenName,
      username: emails[0].value,
    };
  }
}
