import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory, Reflector } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as helmet from 'helmet'
import { AppModule } from './app.module'
import { AppConfig } from './config/app'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const appConfig = app.get(ConfigService).get<AppConfig>('app')
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
  app.setGlobalPrefix('api')
  app.use(cookieParser())
  if (appConfig.isDevelopment) {
    app.enableCors({
      credentials: true,
      origin: true
    })
  } else {
    // @ts-ignore
    app.use(helmet())
  }
  await app.listen(appConfig.port, appConfig.host)
}

bootstrap()
