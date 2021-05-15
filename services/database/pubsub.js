import Redis from 'ioredis'
import { RedisPubSub } from 'graphql-redis-subscriptions'

import { redisHost, redisPort } from './configuration'

const options = {
  host: redisHost,
  port: redisPort,
  retryStrategy: times => Math.min(times * 50, 2000),
}

export default new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options),
})
