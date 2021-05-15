import { gql } from 'apollo-server'

export default gql`
type PhysicalLocality {
  id: ID
  mass: Float
  radius: Float
  x: Float
  y: Float
  dx: Float
  dy: Float
  ddx: Float
  ddy: Float
}

type Query {
  physicalLocalities: [PhysicalLocality]
}

type Subscription {
  physicalLocality: PhysicalLocality
  time: String
}
`
