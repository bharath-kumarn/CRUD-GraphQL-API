const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");
//resolvers for Productline Schema
const resolvers = {
    Query: {
        productlines: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM productlines;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });                     
        },        
    },

    Mutation: {
  createProductline: (_, { productLine,textDescription,htmlDescription,image }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${productLine}`)
      
    db.run('INSERT INTO productlines (productLine,textDescription,htmlDescription,image) VALUES (?,?,?,?);', [productLine,textDescription,htmlDescription,image], (err) => {
      console.log("resolved")
                      if(err) {
                        console.log("error",err)
                          reject(null);
                      }
                          console.log("resolved")
  
                      db.get("SELECT last_insert_rowid() as id", (err, row) => {
                          resolve({
                              id: row["id"],
                              productLine: productLine,
                              textDescription: textDescription,
                              htmlDescription: htmlDescription,
                              image: image
                          });
                      });
                  });
    })
  },
  
  updateProductline: (_, { productLine,textDescription,htmlDescription,image }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${productLine}`)
        
      db.run('UPDATE productlines  set textDescription=?,htmlDescription=?, image=? where productLine=? ;', [textDescription,htmlDescription, image,productLine], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
    
                        db.get("SELECT last_insert_rowid() as id", (err, row) => {
                            resolve({
                                id: row["id"],
                                productLine: productLine,
                                textDescription: textDescription,
                                htmlDescription: htmlDescription,
                                image: image
                            });
                        });
                    });
      })
    },
  
    deleteProductline: (_, { productLine }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${productLine}`)
        
      db.run('DELETE FROM productlines  WHERE productLine=? ;', [productLine], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
                            db.get("SELECT last_insert_rowid() as id", (err, row) => {
                              resolve({
                                  id: row["id"],
                                  productLine: productLine
                              });
                          });
                    });
      })
    },
    }
  }
module.exports=resolvers