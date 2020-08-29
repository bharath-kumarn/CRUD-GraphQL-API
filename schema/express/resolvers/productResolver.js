const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");
//resolvers for Product Schema
const resolvers = {
    Query: {
        products: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM products;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });
                      
        },
        
    },

    Mutation: {
  createProduct: (_, { productCode, productName,productLine, productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${productLine}`)
      
    db.run('INSERT INTO products (productCode, productName,productLine, productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP) VALUES (?,?,?,?,?,?,?,?,?);', [productCode, productName,productLine, productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP], (err) => {
      console.log("resolved")
                      if(err) {
                        console.log("error",err)
                          reject(null);
                      }
                          console.log("resolved")
  
                      db.get("SELECT last_insert_rowid() as id", (err, row) => {
                          resolve({
                              id: row["id"],
                              productCode:productCode, 
                              productName:productName,
                              productLine:productLine, 
                              productScale:productScale,
                              productVendor:productVendor,
                              productDescription:productDescription,
                              quantityInStock:quantityInStock,
                              buyPrice:buyPrice,
                              MSRP:MSRP
                          });
                      });
                  });
    })
  },
  
  updateProduct: (_, { productCode, productName,productLine, productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${productLine}`)
        
      db.run('UPDATE products  set productName=?,productLine=?, productScale=?,productVendor=?,productDescription=?,quantityInStock=?,buyPrice=?,MSRP=? where productCode=? ;', [productName,productLine, productScale,productVendor,productDescription,quantityInStock,buyPrice,MSRP,productCode], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
    
                        db.get("SELECT last_insert_rowid() as id", (err, row) => {
                            resolve({
                                id: row["id"],
                                productCode:productCode, 
                                productName:productName,
                                productLine:productLine, 
                                productScale:productScale,
                                productVendor:productVendor,
                                productDescription:productDescription,
                                quantityInStock:quantityInStock,
                                buyPrice:buyPrice,
                                MSRP:MSRP
                            });
                        });
                    });
      })
    },
  
    deleteProduct: (_, { productCode }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${productCode}`)
        
      db.run('DELETE FROM products  WHERE productCode=? ;', [productCode], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
                            db.get("SELECT last_insert_rowid() as id", (err, row) => {
                              resolve({
                                  id: row["id"],
                                  productCode: productCode
                              });
                          });
                    });
      })
    }, 
    }
  }
module.exports=resolvers