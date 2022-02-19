import appConfig, { AppConfig } from './app'
import authConfig, { AuthConfig } from './auth'
import databaseConfig, { DatabaseConfig } from './database'
import throttleConfig, { ThrottleConfig } from './throttle'

export interface Config {
  app: AppConfig
  auth: AuthConfig
  database: DatabaseConfig
  throttle: ThrottleConfig
}

export default [appConfig, authConfig, databaseConfig, throttleConfig]
