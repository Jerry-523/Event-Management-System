const { Event } = require('../models');

const eventResolvers = {
  Query: {
    events: () => Event.findAll(),
    event: (_, { id }) => Event.findByPk(id),
  },
  Mutation: {
    createEvent: (_, { input }) => Event.create(input),
    updateEvent: async (_, { id, input }) => {
      const event = await Event.findByPk(id);
      if (!event) {
        throw new Error('Event not found');
      }
      return event.update(input);
    },
    deleteEvent: async (_, { id }) => {
      const event = await Event.findByPk(id);
      if (!event) {
        throw new Error('Event not found');
      }
      await event.destroy();
      return event;
    },
  },
};

module.exports = eventResolvers;