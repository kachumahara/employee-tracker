// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 4406
  port: 4406,

  //Your username
  user: "root",

  //Your password
  password: "root",
  database: "employee_db"
});

//connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  //run the start function after the connection is made to prompt the user
  start();
});