//typeDefs for Order Schema
const typeDefs = `
type Order {
    orderNumber: String
    orderDate: String
    requiredDate: String
    shippedDate: String
    status: String
    comments: String
    customerNumber: String
}

type Query {
  orders: [Order]
}
type Mutation {
  createOrder(
    orderNumber: String, orderDate: String,
    requiredDate: String, shippedDate: String,
    status: String,comments: String,
    customerNumber: String
  ): Order
  updateOrder(
    orderNumber: String, orderDate: String,
    requiredDate: String, shippedDate: String,
    status: String,comments: String,
    customerNumber: String): Order
  deleteOrder(orderNumber: String): Order
}

schema {
  query: Query
  mutation: Mutation
}
`
module.exports=typeDefs