const { Question } = require('../models');

const questionResolvers = {
  Query: {
    questions: () => Question.findAll(),
    question: (_, { id }) => Question.findByPk(id),
  },
  Mutation: {
    createQuestion: (_, { input }) => Question.create(input),
    updateQuestion: async (_, { id, status }) => {
      const question = await Question.findByPk(id);
      if (!question) throw new Error('Question not found');
      return question.update({ status });
    },
    deleteQuestion: async (_, { id }) => {
      const question = await Question.findByPk(id);
      if (!question) throw new Error('Question not found');
      await question.destroy();
      return true;
    },
  },
};

module.exports = questionResolvers;