const { Participant } = require('../models');

const participantResolvers = {
  Query: {
    participants: () => Participant.findAll(),
    participant: (_, { id }) => Participant.findByPk(id), 
  },
  Mutation: {
    createParticipant: (_, { input }) => Participant.create(input),
    updateParticipant: async (_, { id, input }) => {
      const participant = await Participant.findByPk(id);
      if (!participant) {
        throw new Error('Participant not found');
      }
      return participant.update(input); 
    },
    deleteParticipant: async (_, { id }) => {
      const participant = await Participant.findByPk(id);
      if (!participant) {
        throw new Error('Participant not found');
      }
      await participant.destroy(); 
      return participant; 
    },
  },
};

module.exports = participantResolvers;
