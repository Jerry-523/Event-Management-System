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

  input UpdateParticipantInput {
    name: String
    email: String
    interests: [String]
  }

  type Query {
    participants: [Participant!]!
    participant(id: ID!): Participant
  }

  type Mutation {
    createParticipant(input: ParticipantInput!): Participant!
    updateParticipant(id: ID!, input: UpdateParticipantInput!): Participant!
    deleteParticipant(id: ID!): Participant!
  }
`;

module.exports = participantSchema;


