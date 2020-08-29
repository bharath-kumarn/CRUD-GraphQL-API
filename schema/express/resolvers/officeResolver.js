const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./data.sqlite");

const resolvers = {
    Query: {
        offices: (root, args, context) => {
          return new Promise((resolve, reject) => {
                          
                          db.all("SELECT * FROM offices;", function(err, rows) {  
                              if(err){
                                  reject([]);
                              }
                              resolve(rows);
                          });
          });
                      
        },
        
    },

    Mutation: {
  createOffice: (_, { officeCode, city,phone, addressLine1,addressLine2,state,country,postalCode,territory }, context) => {
    return new Promise((resolve, reject) => {
    console.log(`${phone}`)
      
    db.run('INSERT INTO offices (officeCode, city,phone, addressLine1,addressLine2,state,country,postalCode,territory) VALUES (?,?,?,?,?,?,?,?,?);', [officeCode, city,phone, addressLine1,addressLine2,state,country,postalCode,territory], (err) => {
      console.log("resolved")
                      if(err) {
                        console.log("error",err)
                          reject(null);
                      }
                          console.log("resolved")
  
                      db.get("SELECT last_insert_rowid() as id", (err, row) => {
                          resolve({
                              id: row["id"],
                              officeCode:officeCode, 
                              city:city,
                              phone:phone, 
                              addressLine1:addressLine1,
                              addressLine2:addressLine2,
                              state:state,
                              country:country,
                              postalCode:postalCode,
                              territory:territory
                          });
                      });
                  });
    })
  },
  
  updateOffice: (_, { officeCode, city,phone, addressLine1,addressLine2,state,country,postalCode,territory }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${phone}`)
        
      db.run('UPDATE offices  set city=?,phone=?, addressLine1=?,addressLine2=?,state=?,country=?,postalCode=?,territory=? where officeCode=? ;', [city,phone, addressLine1,addressLine2,state,country,postalCode,territory,officeCode], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
    
                        db.get("SELECT last_insert_rowid() as id", (err, row) => {
                            resolve({
                                id: row["id"],
                                officeCode:officeCode, 
                                city:city,
                                phone:phone, 
                                addressLine1:addressLine1,
                                addressLine2:addressLine2,
                                state:state,
                                country:country,
                                postalCode:postalCode,
                                territory:territory
                            });
                        });
                    });
      })
    },
  
    deleteOffice: (_, { officeCode }, context) => {
      return new Promise((resolve, reject) => {
      console.log(`${officeCode}`)
        
      db.run('DELETE FROM offices  WHERE officeCode=? ;', [officeCode], (err) => {
        console.log("resolved")
                        if(err) {
                          console.log("error",err)
                            reject(null);
                        }
                            console.log("resolved")
                            db.get("SELECT last_insert_rowid() as id", (err, row) => {
                              resolve({
                                  id: row["id"],
                                  officeCode: officeCode
                              });
                          });
                    });
      })
    },
  
    }
  }

  module.exports=resolvers