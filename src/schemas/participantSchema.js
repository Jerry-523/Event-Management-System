const { gql } = require('apollo-server');

const participantSchema = gql`
  type Participant {
    id: ID!
    name: String!
    email: String!
    interests: [String]!
  }

  input ParticipantInput {
    name: String!
    email: String!
    interests: [String]!
  }

  type Query {
    participants: [Participant!]!
  }

  type Mutation {
    createParticipant(input: ParticipantInput!): Participant!
  }
`;

module.exports = participantSchema;
