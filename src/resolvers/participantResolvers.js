const { Participant } = require('../models');

const participantResolvers = {
  Query: {
    participants: () => Participant.findAll(),
  },
  Mutation: {
    createParticipant: (_, { input }) => Participant.create(input),
  },
};

module.exports = participantResolvers;
