import appConfig, { AppConfig } from './app'

export interface Config {
    app: AppConfig
}

const config: Config = {
    app: appConfig
}
export default config
