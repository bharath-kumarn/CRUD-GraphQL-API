//typeDefs for Customer Schema
const typeDefs = `
type Customer {
  customerNumber: String
  salesRepEmployeeNumber: String
  customerName: String
  contactLastName: String
  contactFirstName: String
  phone: String
  addressLine1: String
  addressLine2: String
  city: String
  state: String
  postalCode: String
  country: String
  creditLimit: String
}

type Query {
  customers: [Customer]
}
type Mutation {
  createCustomer(
    customerNumber: String, salesRepEmployeeNumber: String,
     phone: String, customerName: String,
     contactLastName: String,contactFirstName: String,
     addressLine1: String,addressLine2: String,
     city: String,state: String,
     postalCode: String,country: String,
     creditLimit: String
  ): Customer
  updateCustomer(
    customerNumber: String, salesRepEmployeeNumber: String,
     phone: String, customerName: String,
     contactLastName: String,contactFirstName: String,
     addressLine1: String,addressLine2: String,
     city: String,state: String,
     postalCode: String,country: String,
     creditLimit: String): Customer
  deleteCustomer(customerNumber: String): Customer
}

schema {
  query: Query
  mutation: Mutation
}
`
module.exports=typeDefs