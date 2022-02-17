import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { User } from './user.entity';

//import {User} from "./user.entity";
import { FacebookStrategy } from './facebook.strategy';
//import { GoogleStrategy } from './google.strategy';
//import {GoogleService} from './app.service';
import { GoogleOauthModule } from './google-oauth/google-oauth.module';
//import { UserModule } from './users/users.module';
//import { AuthModule } from './auth/auth.module';

import { FacebookModule } from "./facebook/facebook.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      host: 'localhost',
      port: 5432,
      database: 'test',
      username: 'test',
      password: 'test',
      type: 'postgres',
      entities: [User],
      migrations: [__dirname + '/src/*/.migration.ts'],
      subscribers: [__dirname + '/src/*/.subscriber.ts'],
      autoLoadEntities: true,
      synchronize: true,
      // dropSchema: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'asdqwertyuijhnbvgfcdsxertyuioplk',
      signOptions: { expiresIn: '90d' },
    }),
    // UserModule,
    // AuthModule,
    GoogleOauthModule,
    FacebookModule
  ],
  controllers: [AppController],
  providers: [AppService],
  //, FacebookStrategy
})
export class AppModule {}
