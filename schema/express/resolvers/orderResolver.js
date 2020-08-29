const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");
//resolvers for Order Schema
const resolvers = {
    Query: {
        orders: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM orders;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });                    
        },       
    },

    Mutation: {
  createOrder: (_, { orderNumber, orderDate,requiredDate, shippedDate,status,comments,customerNumber  }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${requiredDate}`)
      
    db.run('INSERT INTO orders (orderNumber, orderDate,requiredDate, shippedDate,status,comments,customerNumber ) VALUES (?,?,?,?,?,?,?);', [orderNumber, orderDate,requiredDate, shippedDate,status,comments,customerNumber ], (err) => {
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
                              orderDate:orderDate,
                              requiredDate:requiredDate, 
                              shippedDate:shippedDate,
                              status:status,
                              comments:comments,
                              customerNumber:customerNumber
                          });
                      });
                  });
    })
  },
  
  updateOrder: (_, { orderNumber, orderDate,requiredDate, shippedDate,status,comments,customerNumber  }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${requiredDate}`)
        
      db.run('UPDATE s  set orderDate=?,requiredDate=?, shippedDate=?,status=?,comments=?,customerNumber=? where orderNumber=? ;', [orderDate,requiredDate, shippedDate,status,comments,customerNumber ,orderNumber], (err) => {
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
                                orderDate:orderDate,
                                requiredDate:requiredDate, 
                                shippedDate:shippedDate,
                                status:status,
                                comments:comments,
                                customerNumber:customerNumber,
                                jobTitle:jobTitle
                            });
                        });
                    });
      })
    },
  
    deleteOrder: (_, { OrderNumber }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${OrderNumber}`)
        
      db.run('DELETE FROM s  WHERE Number=? ;', [Number], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
                            db.get("SELECT last_insert_rowid() as id", (err, row) => {
                              resolve({
                                  id: row["id"],
                                  Number: Number
                              });
                          });
                    });
      })
    },
    }
  }
module.exports=resolvers