import appConfig, { AppConfig } from './app'
import authConfig, { AuthConfig } from './auth'
import databaseConfig, { DatabaseConfig } from './database'
import throttleConfig, { ThrottleConfig } from './throttle'
import googleConfig, { GoogleConfig } from './google'
import facebookConfig, { FacebookConfig } from './facebook'

export interface Config {
  app: AppConfig
  auth: AuthConfig
  database: DatabaseConfig
  facebook: FacebookConfig
  google: GoogleConfig
  throttle: ThrottleConfig
}

export default [appConfig, authConfig, databaseConfig, facebookConfig, googleConfig, throttleConfig]
