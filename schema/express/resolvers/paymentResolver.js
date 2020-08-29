const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./data.sqlite");

const resolvers = {
    Query: {
        payments: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM payments;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });
                      
        },
        
    },

    Mutation: {
  createPayment: (_, { customerNumber,checkNumber,paymentDate,amount }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${customerNumber}`)
      
    db.run('INSERT INTO payments (customerNumber,checkNumber,paymentDate,amount) VALUES (?,?,?,?);', [customerNumber,checkNumber,paymentDate,amount], (err) => {
      console.log("resolved")
                      if(err) {
                        console.log("error",err)
                          reject(null);
                      }
                          console.log("resolved")
  
                      db.get("SELECT last_insert_rowid() as id", (err, row) => {
                          resolve({
                              id: row["id"],
                              customerNumber: customerNumber,
                              checkNumber: checkNumber,
                              paymentDate: paymentDate,
                              amount: amount
                          });
                      });
                  });
    })
  },
  
  updatePayment: (_, { customerNumber,checkNumber,paymentDate,amount }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${customerNumber}`)
        
      db.run('UPDATE payments  set checkNumber=?,paymentDate=?, amount=? where customerNumber=? ;', [checkNumber,paymentDate, amount,customerNumber], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
    
                        db.get("SELECT last_insert_rowid() as id", (err, row) => {
                            resolve({
                                id: row["id"],
                                customerNumber: customerNumber,
                                checkNumber: checkNumber,
                                paymentDate: paymentDate,
                                amount: amount
                            });
                        });
                    });
      })
    },
  
    deletePayment: (_, { customerNumber }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${customerNumber}`)
        
      db.run('DELETE FROM payments  WHERE customerNumber=? ;', [customerNumber], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
                            db.get("SELECT last_insert_rowid() as id", (err, row) => {
                              resolve({
                                  id: row["id"],
                                  customerNumber: customerNumber
                              });
                          });
                    });
      })
    },
  
    }
  }

  module.exports=resolvers