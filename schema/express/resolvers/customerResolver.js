const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./data.sqlite");

const resolvers = {
    Query: {
        customers: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM customers;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });
                      
        },
        
    },
    Mutation: {

  createCustomer: (_, { customerNumber, salesRepEmployeeNumber, phone, customerName, contactLastName,contactFirstName, addressLine1, addressLine2, city, state, postalCode,country, creditLimit }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${customerName}`)
      
    db.run('INSERT INTO customers (customerNumber, salesRepEmployeeNumber, phone, customerName, contactLastName,contactFirstName, addressLine1, addressLine2, city, state, postalCode,country, creditLimit) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);', [customerNumber, salesRepEmployeeNumber, phone, customerName, contactLastName,contactFirstName, addressLine1, addressLine2, city, state, postalCode,country, creditLimit], (err) => {
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
                              salesRepEmployeeNumber: salesRepEmployeeNumber,
                              phone: phone,
                              customerName: customerName,
                              contactLastName: contactLastName,
                              contactFirstName: contactFirstName,
                              addressLine1: addressLine1,
                              addressLine2: addressLine2, 
                              city: city,
                              state: state,
                              postalCode: postalCode,
                              country: country,
                              creditLimit: creditLimit 
                          });
                      });
                  });
    })
  },
  
  updateCustomer: (_, { customerNumber, salesRepEmployeeNumber, phone, customerName, contactLastName,contactFirstName, addressLine1, addressLine2, city, state, postalCode,country, creditLimit }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${customerName}`)
        
      db.run('UPDATE customers  set salesRepEmployeeNumber=?, phone=?, customerName=?, contactLastName=?,contactFirstName=?, addressLine1=?, addressLine2=?, city=?, state=?, postalCode=?,country=?, creditLimit=? where customerNumber=? ;', [ salesRepEmployeeNumber, phone, customerName, contactLastName,contactFirstName, addressLine1, addressLine2, city, state, postalCode,country, creditLimit, customerNumber ], (err) => {
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
                                salesRepEmployeeNumber: salesRepEmployeeNumber,
                                phone: phone,
                                customerName: customerName
                            });
                        });
                    });
      })
    },
  
    deleteCustomer: (_, { customerNumber }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${customerNumber}`)
        
      db.run('DELETE FROM customers  WHERE customerNumber=? ;', [customerNumber], (err) => {
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