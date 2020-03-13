// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 4406
  port: 3306,

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
        "View Employee",
        "View Role",
        "View Department",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee",
        "Update Role",
        "Update Department",
        "Exit"
      ]
    })
    .then(function(answer) {
      // based on the user answer, the called function for the answered action starts
      if (answer.action === "View Employee") {
        viewEmployee();
      } else if (answer.action === "View Role") {
        viewRole();
      } else if (answer.action === "View Department") {
        viewDepartment();
      } else if (answer.action === "Add Employee") {
        addEmployee();
      } else if (answer.action === "Add Role") {
        addRole();
      } else if (answer.action === "Add Department") {
        addDepartment();
      } else if (answer.action === "Update Employee") {
        updateEmployee();
      } else if (answer.action === "Update Role") {
        updateRole();
      } else if (answer.action === "Update Department") {
        updateDepartment();
      } else {
        connection.end();
      }
    });
}

// function to handle viewing employess
function viewEmployee() {
  connection.query("SELECT *  FROM employee", function(err, res) {
    if (err) throw err;
    console.table(res);
    // prompt user for another function
    runSearch();
  });
}

// function to handle viewing Roles
function viewRole() {
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    console.table(res);
    //prompt user for another function
    runSearch();
  });
}
// function to handle viewing Department
function viewDepartment() {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
    //prompt user for another function
    runSearch();
  });
}
// function to handle adding employees
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is your first name?"
      },
      {
        name: "lastName",
        type: "input",
        message: "what is your last name?"
      },
      {
        name: "roleId",
        type: "input",
        message: "What is the role id"
      },
      {
        name: "managerId",
        type: "input",
        message: "whats the manager id?"
      }
    ])
    //inserting answered questions to the employee database folder
    .then(function(answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId
        },
        function(err) {
          if (err) throw err;
          console.log("New employee created successfully!!!");
          // prompt the user to perform another function
          runSearch();
        }
      );
    });
}
// function to handle add roles
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "what role title?"
      },
      {
        name: "salary",
        type: "input",
        message: "what is the salary for this role?"
      },
      {
        name: "deptId",
        type: "input",
        message: "what is the dept id?"
      }
    ])
    //inserting answered questions to the role database folder
    .then(function(answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          dept_id: answer.deptId
        },
        function(err) {
          if (err) throw err;
          console.log("Role created successfull!!");
          // prompt the user to perform another function
          runSearch();
        }
      );
    });
}
// function to handle add department
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "New Department to add"
      }
    ])
    .then(function(answer) {
      connection.query(
        "INSERT INTO department SET ?",
        {
          deptName: answer.department
        },
        function(err) {
          if (err) throw err;
          console.log("Department created sucessfully!!!");
          // prompt the user to perform another function
          runSearch();
        }
      );
    });
}


function updateDepartment() {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].name);
            }
            return choiceArray;
          },
          message: "what would like add?"
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answers.name
          },
          function(err) {
            if (err) throw err;
            console.log("department updated suceesfully!!");
          }
        );
        var chosenUpdate;
        for (var i = 0; i < res.length; i++) {
          if (res[i].name === answers.choice) {
            chosenUpdate = res[i];
          }
        }

        runSearch();
      });
  });
}
// function to update role
function updateRole() {
  console.log("updating all roles...\n");
  connection
    .query("UPDATE role SET ? WHERE ?", function(err, res) {
      if (err) throw err;
      inquirer.prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].name);
            }
            return choiceArray;
          },
          message: "what role do you want to update?"
        }
      ]);
    })

    .then(function(answer) {});
}
