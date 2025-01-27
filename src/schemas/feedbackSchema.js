const { gql } = require('apollo-server');

const feedbackSchema = gql`
  type Feedback {
    id: ID!
    eventId: ID!
    score: Int!
    comment: String
  }

  input FeedbackInput {
    eventId: ID!
    score: Int!
    comment: String
  }

  type Mutation {
    createFeedback(input: FeedbackInput!): Feedback!
  }
`;

module.exports = feedbackSchema;