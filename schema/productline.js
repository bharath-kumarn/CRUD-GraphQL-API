const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/productlineType');
const resolvers = require('./express/resolvers/productlineResolver');

console.log("Im in Productlines")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
