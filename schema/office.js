const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/officeType');
const resolvers = require('./express/resolvers/officeResolver');

console.log("Im in Office")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
