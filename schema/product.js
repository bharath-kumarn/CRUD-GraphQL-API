const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/productType');
const resolvers = require('./express/resolvers/productResolver');

console.log("/product")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
