const { Feedback } = require('../models');

const feedbackResolvers = {
  Mutation: {
    createFeedback: (_, { input }) => Feedback.create(input),
  },
};

module.exports = feedbackResolvers;