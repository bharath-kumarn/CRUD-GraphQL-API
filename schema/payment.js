const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/paymentType');
const resolvers = require('./express/resolvers/paymentResolver');

console.log("/payments")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
