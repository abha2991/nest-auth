import appConfig, { AppConfig } from './app'
import authConfig, { AuthConfig } from './auth'
import databaseConfig, { DatabaseConfig } from './database'
import facebookConfig, { FacebookConfig } from './facebook'
import googleConfig, { GoogleConfig } from './google'
import throttleConfig, { ThrottleConfig } from './throttle'

export interface Config {
  app: AppConfig
  auth: AuthConfig
  database: DatabaseConfig
  facebook: FacebookConfig
  google: GoogleConfig
  throttle: ThrottleConfig
}

export default [appConfig, authConfig, databaseConfig, facebookConfig, googleConfig, throttleConfig]
