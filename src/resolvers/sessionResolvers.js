const { Session } = require('../models');

const sessionResolvers = {
  Query: {
    sessions: (_, { eventId }) => Session.findAll({ where: { eventId } }),
    session: (_, { id }) => Session.findByPk(id),
  },
  Mutation: {
    createSession: (_, { input }) => Session.create(input),
    updateSession: async (_, { id, input }) => {
      const session = await Session.findByPk(id);
      if (!session) {
        throw new Error('Session not found');
      }
      return session.update(input);
    },
    deleteSession: async (_, { id }) => {
      const session = await Session.findByPk(id);
      if (!session) {
        throw new Error('Session not found');
      }
      await session.destroy();
      return session;
    },
  },
};

module.exports = sessionResolvers;