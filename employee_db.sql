--Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db
-- Creates the "emplyee_db" database--
CREATE DATABASE employee_db

-- Makes it so all the folowing code will affect employee_db --
USE employee_db

-- Creates the table " Department" within employee_db --

CREATE TABLE department (
  --Create numeric column called "id" which automatically increment its default value as rows are created--
  id INT(11) AUTO_INCREMENT NOT NULL,
  -- Make a string called "name" which cannot contain null --
  deptName VARCHAR(30),
  PRIMARY KEY (id)
);

--- Creates the table "Role" within employee_db --
CREATE TABLE role (
  -- Create numeric columm called "id" which automatically increment its default value as rows are created --
  id INT(11) AUTO_INCREMENT NOT NULL,
  -- Make a string called "title" --
  title VARCHAR(30),
  -- Make a column called " salary"
  salary DECIMAL NOT NULL,
  -- Make a numeric column "dept_id"
  dept_id INT NOT NULL,
  PRIMARY KEY (id)

);

-- Creates the table "Employee" within employee_db --

CREATE TABLE employee (
  -- Create numeric column called "id" which automatically increment its default value as rows are created --
  id INT(11) AUTO_INCREMENT NOT NULL,
  -- Make a string column called "first_name" --
  first_name VARCHAR(30),
  -- Make a string column called "last_name" --
  last_name VARCHAR(30),
  -- Make a numeric column called "role_id"
  role_id INT(11) NOT NULL,
  -- Make a numeric colunm called "manager_id"
  manager_id INT(11) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department(deptName)
VALUES ();
INSERT INTO role(title, salary, dept_id)
VALUES();
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES();
