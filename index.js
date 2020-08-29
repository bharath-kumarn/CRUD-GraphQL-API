const express = require('express');
const graphql = require("graphql");
var { graphqlHTTP } = require('express-graphql');
const customerSchema = require('./schema/customer');
const employeeSchema = require('./schema/employee');
const productlineSchema = require('./schema/productline');
const officeSchema = require('./schema/office');
const productSchema = require('./schema/product');
const orderSchema = require('./schema/order');
const orderdetailsSchema = require('./schema/orderdetails');
const paymentSchema = require('./schema/payment');
const  app  =  express();

const host = '0.0.0.0';
// const host = 'localhost';
const port = process.env.PORT || 4001;


app.use("/graphql/customer", graphqlHTTP({ schema: customerSchema, graphiql: true}));
app.use("/graphql/employee", graphqlHTTP({ schema: employeeSchema, graphiql: true}));
app.use("/graphql/productline", graphqlHTTP({ schema: productlineSchema, graphiql: true}));
app.use("/graphql/office", graphqlHTTP({ schema: officeSchema, graphiql: true}));
app.use("/graphql/product", graphqlHTTP({ schema: productSchema, graphiql: true}));
app.use("/graphql/order", graphqlHTTP({ schema: orderSchema, graphiql: true}));
app.use("/graphql/orderdetails", graphqlHTTP({ schema: orderdetailsSchema, graphiql: true}));
app.use("/graphql/payment", graphqlHTTP({ schema: paymentSchema, graphiql: true}));
// app.listen(4001, () => {
//         console.log("GraphQL server running at http://localhost:4001/graphql .");
//         console.log("API Routes ");
//         console.log("http://localhost:4001/graphql/employee ");
//         console.log("http://localhost:4001/graphql/customer ");
//         console.log("http://localhost:4001/graphql/productline ");
//         console.log("http://localhost:4001/graphql/office ");
//         console.log("http://localhost:4001/graphql/product ");
//         console.log("http://localhost:4001/graphql/order ");
//         console.log("http://localhost:4001/graphql/orderdetails ");
//         console.log("http://localhost:4001/graphql/payment ");
// });


app.listen(port, host, function(){
        console.log("GraphQL server running at http://localhost:4001/graphql .");
        console.log("API Routes ");
        console.log("http://localhost:4001/graphql/employee ");
        console.log("http://localhost:4001/graphql/customer ");
        console.log("http://localhost:4001/graphql/productline ");
        console.log("http://localhost:4001/graphql/office ");
        console.log("http://localhost:4001/graphql/product ");
        console.log("http://localhost:4001/graphql/order ");
        console.log("http://localhost:4001/graphql/orderdetails ");
        console.log("http://localhost:4001/graphql/payment ");
       });
