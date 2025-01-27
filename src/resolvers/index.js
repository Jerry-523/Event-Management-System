const eventResolvers = require('./eventResolvers');
const sessionResolvers = require('./sessionResolvers');
const participantResolvers = require('./participantResolvers');
const feedbackResolvers = require('./feedbackResolvers');
const questionResolvers = require('./questionResolvers');

module.exports = {
  Query: {
    ...eventResolvers.Query,
    ...sessionResolvers.Query,
    ...participantResolvers.Query,
  },
  Mutation: {
    ...eventResolvers.Mutation,
    ...sessionResolvers.Mutation,
    ...participantResolvers.Mutation,
    ...feedbackResolvers.Mutation,
    ...questionResolvers.Mutation,
  },
};
