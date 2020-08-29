const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/productType');
const resolvers = require('./express/resolvers/productResolver');

console.log("Im in Product")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
