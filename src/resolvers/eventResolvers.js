const { Event } = require('../models');

const eventResolvers = {
  Query: {
    events: () => Event.findAll(),
  },
  Mutation: {
    createEvent: (_, { input }) => Event.create(input),
  },
};

module.exports = eventResolvers;
