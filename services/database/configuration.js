export const isProduction = process.env.NODE_ENV === 'production'

export const redisHost = isProduction
  ? 'https://redis.ezekiel'
  : 'localhost'

export const redisPort = isProduction
  ? 6379
  : 6379
