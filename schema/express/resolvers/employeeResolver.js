const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./data.sqlite");

const resolvers = {
    Query: {
        employees: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM employees;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });
                      
        },
        
    },

    Mutation: {
  createEmployee: (_, { employeeNumber, lastName,firstName, extension,email,officeCode,reportsTo,jobTitle }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${firstName}`)
      
    db.run('INSERT INTO employees (employeeNumber, lastName,firstName, extension,email,officeCode,reportsTo,jobTitle) VALUES (?,?,?,?,?,?,?,?);', [employeeNumber, lastName,firstName, extension,email,officeCode,reportsTo,jobTitle], (err) => {
      console.log("resolved")
                      if(err) {
                        console.log("error",err)
                          reject(null);
                      }
                          console.log("resolved")
  
                      db.get("SELECT last_insert_rowid() as id", (err, row) => {
                          resolve({
                              id: row["id"],
                              employeeNumber:employeeNumber, 
                              lastName:lastName,
                              firstName:firstName, 
                              extension:extension,
                              email:email,
                              officeCode:officeCode,
                              reportsTo:reportsTo,
                              jobTitle:jobTitle
                          });
                      });
                  });
    })
  },
  
  updateEmployee: (_, { employeeNumber, lastName,firstName, extension,email,officeCode,reportsTo,jobTitle }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${firstName}`)
        
      db.run('UPDATE employees  set lastName=?,firstName=?, extension=?,email=?,officeCode=?,reportsTo=?,jobTitle=? where employeeNumber=? ;', [lastName,firstName, extension,email,officeCode,reportsTo,jobTitle,employeeNumber], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
    
                        db.get("SELECT last_insert_rowid() as id", (err, row) => {
                            resolve({
                                id: row["id"],
                                employeeNumber:employeeNumber, 
                                lastName:lastName,
                                firstName:firstName, 
                                extension:extension,
                                email:email,
                                officeCode:officeCode,
                                reportsTo:reportsTo,
                                jobTitle:jobTitle
                            });
                        });
                    });
      })
    },
  
    deleteEmployee: (_, { employeeNumber }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${employeeNumber}`)
        
      db.run('DELETE FROM employees  WHERE employeeNumber=? ;', [employeeNumber], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
                            db.get("SELECT last_insert_rowid() as id", (err, row) => {
                              resolve({
                                  id: row["id"],
                                  employeeNumber: employeeNumber
                              });
                          });
                    });
      })
    },
  
    }
  }

  module.exports=resolvers