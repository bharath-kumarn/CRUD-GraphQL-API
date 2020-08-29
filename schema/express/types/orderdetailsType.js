//typeDefs for Orderdetails Schema
const typeDefs = `
type Orderdetails {
    orderNumber: String
    productCode: String
    quantityOrdered: String
    priceEach: String
    orderLineNumber: String
}

type Query {
  orderdetails: [Orderdetails]
}
type Mutation {
  createOrderdetails(
    orderNumber: String, productCode: String,
    quantityOrdered: String, priceEach: String,
    orderLineNumber: String
  ): Orderdetails
  updateOrderdetails(
    orderNumber: String, productCode: String,
    quantityOrdered: String, priceEach: String,
    orderLineNumber: String): Orderdetails
  deleteOrderdetails(orderNumber: String): Orderdetails
}

schema {
  query: Query
  mutation: Mutation
}
`
module.exports=typeDefs