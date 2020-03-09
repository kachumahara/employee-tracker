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

// function which prompst the user for what action they should take
function start() {
  inquirer
  .prompt({
    name: "addOrViewOrUpdate",
    type: "list",
    message: "Would you like to [ADD] an employee [VIEW] an employee [UPDATE] an employee?",
    choices: ["ADD", "VIEW, UPDATE"]
  })
  .then(function(annser) {
    // based on their answer, either call the add or the view or the update functions
    if (answer.addOrViewOrUpdate === "ADD") {
      addEmployee();
    }
    else if(answer.addOrViewOrUpdate === "VIEW") {
      viewEmployee();
    }
    else if (answer.addOrViewOrUpdate === "UPDATE") {
      updateEmployee();
    }
    else{
      connection.end();
    }
  });
}
console.log()
// function to handle adding new employee
