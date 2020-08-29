const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/productlineType');
const resolvers = require('./express/resolvers/productlineResolver');

console.log("/productlines")
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
