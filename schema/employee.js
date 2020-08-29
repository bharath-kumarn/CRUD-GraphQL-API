const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/employeeType');
const resolvers = require('./express/resolvers/employeeResolver');

console.log("Im in Employee")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
