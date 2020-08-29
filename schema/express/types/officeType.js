const typeDefs = `
type Office {
  officeCode: String
  city: String
  phone: String
  addressLine1: String
  addressLine2: String
  state: String
  country: String
  postalCode: String
  territory: String
}

type Query {
  offices: [Office]
}
type Mutation {
  createOffice(
    officeCode: Int, city: Int,
     phone: String,
     addressLine1: String,addressLine2: String,
     state: String,country: String,
     postalCode: String,territory: String
  ): Office
  updateOffice(
    officeCode: Int, city: Int,
     phone: String,
     addressLine1: String,addressLine2: String,
     state: String,country: String,
     postalCode: String,territory: String): Office
  deleteOffice(officeCode: String): Office

}

schema {
  query: Query
  mutation: Mutation
}
`

module.exports=typeDefs