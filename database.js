const mysql = require("mysql");

properties = {
  host: "fintechsg08.mysql.database.azure.com",
  port: 3306,
  user: "fintechlab@fintechsg08",
  password: "FinTechSG2021",
  database: "group6",
};

connection = mysql.createConnection(properties);
connection.connect((errors) => {
    if (errors) {
      console.log(errors);
    } else {
      console.log("MySQL Connected!");
    }
  });

// after this point, connection object can be used to execute queries.


// To keep the connection alive
setInterval(() => {
  connection.query("select 1");
}, 60 * 1000);

module.exports = {
  connection,
};

   // Press ctrl + C to exit the process

  