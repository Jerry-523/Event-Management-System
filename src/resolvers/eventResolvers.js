const { Event } = require('../models');

const eventResolvers = {
  Query: {
    events: () => Event.findAll(),
  },
  Mutation: {
    createEvent: (_, { input }) => Event.create(input),
    async updateEvent(_, { id, input }) {
        try {
          const event = await Event.findByPk(id);
          
          if (!event) {
            throw new Error('Evento não encontrado');
          }
  
          const updatedEvent = await event.update(input);
  
          return updatedEvent;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      async deleteEvent(_, { id }) {
        try {
          const event = await Event.findByPk(id);
          
          if (!event) {
            throw new Error('Evento não encontrado');
          }
  
          await event.destroy();
  
          return event;
        } catch (error) {
          throw new Error(error.message);
        }
      },
  },
};

module.exports = eventResolvers;
