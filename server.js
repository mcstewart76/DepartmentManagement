const express = require('express');
const sequelize = require('./config/connection');
const question = require('./lib/questions');
const models = require('./models');
const inquirer = require('inquirer')

//const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function  serverStart() {
 return sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on ' + PORT));
}); 
};


  
//////////////////////////////////////////////////////////////////////
// % App Starter %
//////////////////////////////////////////////////////////////////////



  function initialQuestions() {
    
    return   inquirer
       .prompt(question.startupQuestionPrompt())
       .then((data) => {
      switch (data['introQuestion']){
          case "View All Employees":
            viewEmployees();
            break
          case "Add Employee":
            addEmployee();
            break
          case "Update Employee Role":
            updateEmployee();
            break
          case "View All Roles":
            viewRoles();
            break
          case "Add Role":
            addRole();
            break
          case "View All Departments":
            viewDepartments();
            break
          case "Add Department":
            addDepartment();
            break
          case "Quit":
            console.log("\n Goodbye! \n")
            process.exit(0);

      }
    });
  }
  

   const runner = async () => {
    const serverStarter = await serverStart();
    console.log("\n\n\n")
    console.log("Initilizing Application!")
    const docmake = await initialQuestions();
    
    }
    runner();

  