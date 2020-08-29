const typeDefs = `
type Product {
  productCode: String
  productName: String
  productLine: String
  productScale: String
  productVendor: String
  productDescription: String
  quantityInStock: String
  buyPrice: String
  MSRP: String
}

type Query {
  products: [Product]
}
type Mutation {
  createProduct(
    productCode: Int, productName: Int,
     productLine: String,
     productScale: String,productVendor: String,
     productDescription: String,quantityInStock: String,
     buyPrice: String,MSRP: String
  ): Product
  updateProduct(
    productCode: Int, productName: Int,
     productLine: String,
     productScale: String,productVendor: String,
     productDescription: String,quantityInStock: String,
     buyPrice: String,MSRP: String): Product
  deleteProduct(productCode: String): Product
}

schema {
  query: Query
  mutation: Mutation
}
`
module.exports=typeDefs