import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {User} from "./user.entity";
import {JwtModule} from "@nestjs/jwt";
//import { FacebookStrategy } from "./facebook.strategy";
//import { GoogleStrategy } from './google.strategy';
//import {GoogleService} from './app.service';
//import { GoogleOauthModule } from './google-oauth/google-oauth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    host: "localhost",
    port: 5432,
    database: "test",
    username: "test",
    password: "test",
    type: 'postgres',
    entities: [User],
    migrations: [__dirname + '/src/*/.migration.ts'],
    subscribers: [__dirname + '/src/*/.subscriber.ts'],
    autoLoadEntities: true,
    synchronize: true,
     // dropSchema: true,
    logging: true
  }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'asdqwertyuijhnbvgfcdsxertyuioplk',
      signOptions: {expiresIn: '1d'}
    }),
    //GoogleOauthModule
  ],
  controllers: [AppController],
  providers: [AppService],
     //, FacebookStrategy

})
export class AppModule {}
