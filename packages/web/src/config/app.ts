export interface AppConfig {
  apiUrl: string
  isDevelopment: boolean
}

const appConfig = {
  apiUrl: process.env.REACT_APP_API_URL!,
  isDevelopment: process.env.NODE_ENV === 'development'
}

export default appConfig
