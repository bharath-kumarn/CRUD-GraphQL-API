const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/officeType');
const resolvers = require('./express/resolvers/officeResolver');

console.log("/office")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
