const { gql } = require('apollo-server');

const questionSchema = gql`
  type Question {
    id: ID!
    content: String!
    status: String!
    participantId: ID!
    eventId: ID!
  }

  input QuestionInput {
    content: String!
    participantId: ID!
    eventId: ID!
  }

  type Query {
    questions: [Question!]!
    question(id: ID!): Question!
  }

  type Mutation {
    createQuestion(input: QuestionInput!): Question!
    updateQuestion(id: ID!, status: String!): Question!
    deleteQuestion(id: ID!): Boolean!
  }
`;

module.exports = questionSchema;
