const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/customerType');
const resolvers = require('./express/resolvers/customerResolver');

console.log("Im in Customer")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
