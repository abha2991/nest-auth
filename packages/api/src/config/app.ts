import { registerAs } from '@nestjs/config'

export interface AppConfig {
    host: string
    port: number
    isDevelopment: boolean
    url: string
}

export default registerAs(
    'app',
    (): AppConfig => ({
        host: process.env.APP_HOST || '0.0.0.0',
        port: parseInt(process.env.APP_PORT, 10) || 3001,
        isDevelopment: process.env.APP_ENV === 'development',
        url: process.env.APP_URL
    })
)
