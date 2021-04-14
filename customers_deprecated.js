const database = require("./database");
const express = require("express");

router = express.Router();

// router.get("/customers", (request, response) => {
//   database.connection.query("select * from sellers", (errors, results) => {
//     if (errors) {
//       console.log(errors);
//       response.status(500).send("Internal Server Error");
//     } else {
//       response.status(200).send(results);
//     }
//   });
// });

// Get account_balance by customer_id
router.get("/accounts/by_customer_id", (request, response) => {
  database.connection.query(
    // `select * from accounts where id = '${request.query.id}'`,
    `select * from accounts`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

// // Get seller by name
// router.get("/sellers/by_name", (request, response) => {
//   database.connection.query(
//     `select * from sellers where name = '${request.query.name}'`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send(results);
//       }
//     }
//   );
// });
// //add record to sellers
// router.post("/sellers/addnew", (request, response) => {
//   database.connection.query(
//     `insert into sellers (name, wallet) values ('${request.body.name}','${request.body.wallet}')`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send("Added Successfully!");
//       }
//     }
//   );
// });
// //delete record from sellers
// router.delete("/sellers/by_id", (request, response) => {
//   database.connection.query(
//     `delete from sellers where id = ${request.query.id}`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send("Deleted Successfully!");
//       }
//     }
//   );
// });

// router.put("/sellers/update_wallet", (request, response) => {
//   database.connection.query(
//     `update sellers set wallet = '${request.body.wallet}' where id = ${request.query.id}`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send("Updated Successfully!");
//       }
//     }
//   );
// });

        // method1 = "Hello1";
        // method2 = 'Hello2';
        // method3 = `Hello3`;
        
        
// module.exports = {
//     get_all_sellers,
//     create_new_seller,
//     delete_seller_by_id,
//     };   

module.exports = { router };