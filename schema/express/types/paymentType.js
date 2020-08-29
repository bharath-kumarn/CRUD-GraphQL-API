const typeDefs = `
type Payment {
    customerNumber: String
    checkNumber: String
    paymentDate: String
    amount: String
}

type Query {
  payments: [Payment]
}
type Mutation {
  createPayment(
    customerNumber: String, checkNumber: String,
    paymentDate: String, amount: String

  ): Payment
  updatePayment(
    customerNumber: String, checkNumber: String,
    paymentDate: String, amount: String): Payment
  deletePayment(customerNumber: String): Payment

}

schema {
  query: Query
  mutation: Mutation
}
`

module.exports=typeDefs