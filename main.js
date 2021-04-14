// const sellers = require("./sellers");
// const customers = require("./customers");

// sellers.get_all_sellers(); // invoking the function which calls the query//
// //customers.get_customers_by_type();

// Imported the express library
const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
// const accounts = require("./customers");// require a file something.js
const accounts = require("./accounts") // this is ok
// 
service = express();
service.use(cors());
service.use(body_parser.json());
service.use(accounts.router);


// We start the service on port 3000. API Listener has started on port 3000.
service.listen(3000);
