export const isProduction = process.env.NODE_ENV === 'production'
export const developmentPort = 5001
export const appHost = isProduction
  ? 'https://ezekiel.love'
  : 'http://localhost:3000'

export const redisHost = isProduction
  ? 'https://redis.ezekiel'
  : 'localhost'

export const redisPort = isProduction
  ? 6379
  : 6379
