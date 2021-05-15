import { ApolloServer } from 'apollo-server'

import pubsub from '../../database/pubsub'

import schema from './schema'

import { developmentPort } from './configuration'

const port = process.env.PORT || developmentPort

const resolvers = {
  Query: {
    physicalLocalities: () => [],
  },
  Subscription: {
    time: {
      subscribe: () => pubsub.asyncIterator(['UPDATE_TIME']),
    },
    physicalLocality: {
      subscribe: () => pubsub.asyncIterator(['UPDATE_PHYSICAL_LOCALITY']),
    },
  },
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  subscriptions: {
    path: '/subscriptions',
    onConnect() {
      console.log('Connected!')
    },
    onDisconnect() {
      console.log('Disconnected!')
    },
  },
  context({ req, connection }) {
    if (connection) {
      // Operation is a Subscription
      const token = connection.context.authorization || ''

      return { token }
    }
    // Operation is a Query/Mutation
    const token = req.headers.authorization || ''

    return { token }
  },
  introspection: true,
  playground: true,
})

server.listen(port).then(() => {
  console.log('Ezekiel GraphQL server listening on port', port)
})
