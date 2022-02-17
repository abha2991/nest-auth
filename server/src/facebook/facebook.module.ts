import { Module } from '@nestjs/common';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from './facebook.strategy';
import { JwtAuthModule } from '../google-oauth/jwt-auth.module'
@Module({
  imports: [JwtAuthModule],
  providers: [FacebookStrategy],
  controllers: [FacebookController],
})
export class FacebookModule {}
