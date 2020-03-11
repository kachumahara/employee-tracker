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
  runSearch();
});

// function which prompst the user for what action they should take
function runSearch() {
  inquirer
  .prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View Employees",
      "View Role",
      "View Department",
      "Add Employee",
      "Add Role",
      "Add Department",
      "Update Role",
      "View Manager"

    ]
  })
  .then(function(annser) {
    // based on their answer, either call the add or the view or the update functions
    if (answer.action === "View Employees") {
      viewEmployee();
    }
    else if(answer.action === "View Roles") {
      viewRole();
    }
    else if (answer.action === "View Department") {
      viewDepartment();
    }
    else if (answer.action === "Add Employee") {
      addEmployee();
    }
    else if (answer.action === "Add Role") {
      addRole();
    }
    else if (answer.action === "Add Department") {
      addDepartment();
    }
    else if ( answer.action === "Update Role") {
      updateRole();
    }
    else if (answer.action === "View Manager") {
      viewManager();
    }
    else {
      connection.end();
    }
  })
}

// function to handle viewing employess
function viewEmployee(){

  .then(function(answer) {

  })
}

// function to handle viewing Roles
function viewRoles(){

  .then(function(answer){

  })
}
// function to handle viewing Department
function viewDepartment(){

  .then(function(answer){

  })
}
// function to handle adding employees
function addEmployee(){

  .then(function(answer){

  })
}
// function to handle add roles
function addRole(){

  .then(function(answer){

  })
}
// function to handle add department
function addDepartment(){

  .then (function(answer){

  })
}
// function to update role
function updateRole(){

  .then (function(answer){

  })
}
// function to view manager
function viewManager(){

  .then(function(answer){
    
  })
}