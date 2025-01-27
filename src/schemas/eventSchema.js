const { gql } = require('apollo-server');

const eventSchema = gql`
  type Event {
    id: ID!
    title: String!
    category: String!
    date: String!
    location: String!
    description: String
    capacity: Int!
    status: String!
  }

  input EventInput {
    title: String!
    category: String!
    date: String!
    location: String!
    description: String
    capacity: Int!
    status: String!
  }

  type Query {
    events: [Event!]!
  }

  type Mutation {
    createEvent(input: EventInput!): Event!
  }
`;

module.exports = eventSchema;