const typeDefs = `
type Productline {
    productLine: String
    textDescription: String
    htmlDescription: String
    image: String
}

type Query {
  productlines: [Productline]
}
type Mutation {
  createProductline(
    productLine: String, textDescription: String,
    htmlDescription: String, image: String

  ): Productline
  updateProductline(
    productLine: String, textDescription: String,
    htmlDescription: String, image: String): Productline
  deleteProductline(productLine: String): Productline

}

schema {
  query: Query
  mutation: Mutation
}
`

module.exports=typeDefs