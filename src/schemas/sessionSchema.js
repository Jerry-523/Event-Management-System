const { gql } = require('apollo-server');

const sessionSchema = gql`
  type Session {
    id: ID!
    title: String!
    date: String!
  }

  input SessionInput {
    eventId: ID!
    title: String!
    date: String!
  }

  type Query {
    sessions(eventId: ID!): [Session!]!
    session(id: ID!): Session!
  }

  type Mutation {
    createSession(input: SessionInput!): Session!
    updateSession(id: ID!, input: SessionInput!): Session!
    deleteSession(id: ID!): Session!
  }
`;

module.exports = sessionSchema;