//const express = require('express');
const sequelize = require('./config/connection');
const inquirer = require('inquirer');
//const connector = require('sequelize');
//const mysql = require('mysql2')



//Imports functions from other files
 const question = require('./lib/questions');
// const adding = require('./lib/adding')
// const view = require('./lib/views');

 const models = require('./models');

// For seeding only
const Employee = require('./models/Employee');
const Department = require('./models/Department');

const seedDepartmentData = require('./seeds/departmentSeedData.json');




//const mysql = require('mysql2');
//const app = express();
//const PORT = process.env.PORT || 3001;


//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    Department.bulkCreate(seedDepartmentData)
  })
};
  // sequelize.sync({ force: true })
  //  .then(() => {
  // // Department.bulkCreate(seedData).then(() =>{
  //  //app.listen(PORT, () => console.log('Now listening on ' + PORT)); 
 // Department.bulkCreate(seedDepartmentData)
   
  // }) 

  





  
//////////////////////////////////////////////////////////////////////
// % App Starter %
//////////////////////////////////////////////////////////////////////

// initialQuestions();

  
  const initialQuestions =async() =>{
    return inquirer
       .prompt(question.startupQuestion)
          .then(function(data) {
          
              switch (data.introQuestion) {
                  case "View All Employees":
                    viewEmployees();
                    break;
                  case "Add Employee":
                    addEmployee();
                    break;
                  case "Update Employee Role":
                    updateEmployee();
                    break;
                  case "View All Roles":
                    viewRoles();
                    break;
                  case "Add Role":
                    addRole();
                    break;
                  case "View All Departments":
                    viewDepartments();
                    break;
                  case "Add Department":
                  
                   addDepartment(); 
                  
                  
                  
                  
                    break;
                  case "Quit":
                    console.log("\n Goodbye! \n")
                    
                    process.exit(0);
              
              }
        
          })


  
  

 
  //   // const seedDatabase = () => {
  //   // return  sequelize.sync({ force: false }).then(() => {
  //   //     })
  //   //    .then(() => {
  //   //       console.log("Completed Department Seeding")
  //   //    Department.bulkCreate(seedData)
      
  //   //    });
      
  //   // // }
  
  


// //module.exports = {initialQuestions}

// // ///////////////////////////////////////////////////////
// // %% App Questions %%
// /////////////////////////////////////////////////////
  function addRole() {
    inquirer
      .prompt(question.addRolePrompt())
        .then(function(data) {
            
            //console.log(data['departmentName'])
            //add to schema here
              console.log(data.roleName)
              console.log(data.roleSalary)
              //query departments
              console.log(data.roleDepartment)
            
        })
        
  };

//Add Department Function
  function addDepartment () {
    inquirer
    .prompt(question.addDepartment)
        .then(function(data) {
            console.log(data.departmentName + ' was added!')
        //     console.log(data['departmentName'])
        //    // add to schema here
        //     sequelize.sync({
        //         force: false
        //     }).then(function(){
                Department.create({
        
                    "name": data.departmentName
                    
                })
                
        //     }).then(function(){
        //      return  
        //     })
            

              
            
        }).then(function(){
          initialQuestions();
        })
      
  };
  
}
const runner = async () => {
    //const serverStarter = await serverStart();
    seedDatabase();
    console.log("\n\n\n")
    console.log("Initilizing Application!")
    const docmake = await initialQuestions();
    console.log(docmake)
    }
    runner();