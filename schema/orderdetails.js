const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./express/types/orderdetailsType');
const resolvers = require('./express/resolvers/orderdetailsResolver');

console.log("/orderdetails")

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  module.exports=schema
