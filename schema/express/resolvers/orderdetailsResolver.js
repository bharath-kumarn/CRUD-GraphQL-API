const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");
//resolvers for Orderdetails Schema
const resolvers = {
    Query: {
        orderdetails: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM orderdetails;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });                     
        },       
    },

    Mutation: {
  createOrderdetails: (_, { orderNumber, productCode,quantityOrdered, priceEach,orderLineNumber }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${quantityOrdered}`)
      
    db.run('INSERT INTO orderdetails (orderNumber, productCode,quantityOrdered, priceEach,orderLineNumber) VALUES (?,?,?,?,?);', [orderNumber, productCode,quantityOrdered, priceEach,orderLineNumber], (err) => {
      console.log("resolved")
                      if(err) {
                        console.log("error",err)
                          reject(null);
                      }
                          console.log("resolved")
  
                      db.get("SELECT last_insert_rowid() as id", (err, row) => {
                          resolve({
                              id: row["id"],
                              orderNumber:orderNumber, 
                              productCode:productCode,
                              quantityOrdered:quantityOrdered, 
                              priceEach:priceEach,
                              orderLineNumber:orderLineNumber
                          });
                      });
                  });
    })
  },
  
  updateOrderdetails: (_, { orderNumber, productCode,quantityOrdered, priceEach,orderLineNumber  }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${quantityOrdered}`)
        
      db.run('UPDATE orderdetails  set productCode=?,quantityOrdered=?, priceEach=?,orderLineNumber=? where orderNumber=? ;', [productCode,quantityOrdered, priceEach,orderLineNumber ,orderNumber], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
    
                        db.get("SELECT last_insert_rowid() as id", (err, row) => {
                            resolve({
                                id: row["id"],
                                orderNumber:orderNumber, 
                                productCode:productCode,
                                quantityOrdered:quantityOrdered, 
                                priceEach:priceEach,
                                orderLineNumber:orderLineNumber
                            });
                        });
                    });
      })
    },
  
    deleteOrderdetails: (_, { orderNumber }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${orderNumber}`)
        
      db.run('DELETE FROM orderdetails  WHERE orderNumber=? ;', [orderNumber], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
                            db.get("SELECT last_insert_rowid() as id", (err, row) => {
                              resolve({
                                  id: row["id"],
                                  orderNumber: orderNumber
                              });
                          });
                    });
      })
    },
  
    }
  }
module.exports=resolvers