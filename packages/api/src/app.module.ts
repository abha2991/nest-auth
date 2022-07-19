import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'

import { ServeStaticModule } from '@nestjs/serve-static'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join, resolve } from 'path'
import { AppController } from './app.controller'
import { AuthModule } from './auth/auth.module'
import { CardModule } from './card/card.module'
import { CardModule1 } from './card1/card.module'
import { CardcaptiondetailsModule } from './cardcaptiondetails/cardcaptiondetails.module'
import { CardetailsModule } from './cardetails/cardetails.module'
import { JwtAuthGuard } from './common/guards/jwt-auth.guard'
import { RolesGuard } from './common/guards/roles.guard'
import config from './config'
import app, { AppConfig } from './config/app'
import { DatabaseConfig } from './config/database'
import { ThrottleConfig } from './config/throttle'

import { PaymentgatewayModule } from './paymentgateway/paymentgateway.module'
import { UsersModule } from './users/users.module'
import { VideoModule } from './video/video.module'
import { VideoredisModule } from './videoredis/videoredis.module'
import { ContactusModule } from './contactus/contactus.module'
import { CustomizecardsqueryModule } from './customizecardsquery/customizecardsquery.module'
import { UploadfileModule } from './uploadfile/uploadfile.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: config,
      ignoreEnvVars: true,
      isGlobal: true,
      expandVariables: true,
      envFilePath: resolve('..', '..', '.env')
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const appConfig = configService.get<AppConfig>('app')
        const throttleConfig = configService.get<ThrottleConfig>('throttle')
        return appConfig.isDevelopment ? {} : throttleConfig
      },
      inject: [ConfigService]
    }),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const appConfig = configService.get<AppConfig>('app')
        return appConfig.isDevelopment
          ? []
          : [{ rootPath: join(__dirname, '..', '..', 'web', 'build'), exclude: ['/api'] }]
      },
      inject: [ConfigService]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'card1', 'generated'),
      serveRoot: '/generated/'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'card1', 'assets'),
      serveRoot: '/assets/'
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../uploads', 'Banner'),
      serveRoot: '/Banner/'
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const databaseConfig = configService.get<DatabaseConfig>('database')
        const appConfig = configService.get<AppConfig>('app')
        return {
          ...databaseConfig,
          type: 'postgres',
          entities: [__dirname + '/src/**/*.entity.ts'],
          migrations: [__dirname + '/src/**/*.migration.ts'],
          subscribers: [__dirname + '/src/**/*.subscriber.ts'],
          autoLoadEntities: true,

          ...(appConfig.isDevelopment
            ? {
                synchronize: true,
                logging: true
                // dropSchema: true
              }
            : {})
        }
      },
      inject: [ConfigService]
    }),
    // BullModule.forRoot({
    //   redis:{
    //     host:'localhost',
    //     port:6379
    //   },
    // }),
    //       BullModule.registerQueue({
    //         name:'video-queue'
    //       }),
    // Custom Modules
    UsersModule,
    AuthModule,
    CardModule,
    CardModule1,
    VideoModule,
    VideoredisModule,
    CardetailsModule,
    CardcaptiondetailsModule,
    ContactusModule,
    PaymentgatewayModule,
    CustomizecardsqueryModule,
    UploadfileModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule {}
