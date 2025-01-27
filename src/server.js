const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const sequelize = require('./config/db');

const server = new ApolloServer({ typeDefs, resolvers });

sequelize.sync().then(() => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
