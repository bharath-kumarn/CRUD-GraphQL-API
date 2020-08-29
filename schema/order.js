const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/orderType');
const resolvers = require('./express/resolvers/orderResolver');

console.log("Im in Orders")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
