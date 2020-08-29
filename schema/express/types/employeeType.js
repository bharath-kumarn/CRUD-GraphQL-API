//typeDefs for Employee Schema
const typeDefs = `
type Employee {
    employeeNumber: String
    lastName: String
    firstName: String
    extension: String
    email: String
    officeCode: String
    reportsTo: String
    jobTitle: String
}

type Query {
  employees: [Employee]
}
type Mutation {
  createEmployee(
    employeeNumber: String, lastName: String,
    firstName: String, extension: String,
    email: String,officeCode: String,
    reportsTo: String,jobTitle: String
  ): Employee
  updateEmployee(
    employeeNumber: String, lastName: String,
    firstName: String, extension: String,
    email: String,officeCode: String,
    reportsTo: String,jobTitle: String): Employee
  deleteEmployee(employeeNumber: String): Employee
}

schema {
  query: Query
  mutation: Mutation
}
`
module.exports=typeDefs