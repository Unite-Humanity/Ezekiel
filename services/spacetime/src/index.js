import pubsub from '../../database/pubsub'

setInterval(() => {
  pubsub.publish('UPDATE_TIME', { time: new Date().toISOString() })
}, 1000)

console.log('Ezekiel spacetime launched')
