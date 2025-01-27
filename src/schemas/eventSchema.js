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

  input UpdateEventInput {
    title: String
    category: String
    date: String
    location: String
    description: String
    capacity: Int
    status: String
  }

  type Query {
    events: [Event!]!
    event(id: ID!): Event
  }

  type Mutation {
    createEvent(input: EventInput!): Event!
    updateEvent(id: ID!, input: UpdateEventInput!): Event!
    deleteEvent(id: ID!): Event!
  }
`;

module.exports = eventSchema;
