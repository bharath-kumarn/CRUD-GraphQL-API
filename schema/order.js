const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/orderType');
const resolvers = require('./express/resolvers/orderResolver');

console.log("/orders")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
