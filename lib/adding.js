// const inquirer = require('inquirer');
// //const sequelize = require('../config/connection');
// const Department = require('../models/Department');
// const question = require('./questions');
// //const question = require('./lib/questions');

// const view = require('./views');

// //const connection = require('../config/connection')




// //Add Employee Function
// function addEmployee(){
//     return 
// };

// //Add Role Function
// function addRole() {
//      inquirer
//       .prompt(question.addRolePrompt())
//       .then(function(data) {
          
//           //console.log(data['departmentName'])
//           //add to schema here
//            console.log(data.roleName)
//            console.log(data.roleSalary)
//            //query departments
//            console.log(data.roleDepartment)
         
//       })
//        initialQuestions();
//   };

// //Add Department Function
// function addDepartment () {
//    inquirer
//     .prompt(question.addDepartmentPrompt())
//     .then(function(data) {
//         console.log(data.departmentName + ' was added!')
//     //     console.log(data['departmentName'])
//     //    // add to schema here
//     //     sequelize.sync({
//     //         force: false
//     //     }).then(function(){
//             Department.create({
    
//                 "name": data.departmentName
                
//             })
            
//     //     }).then(function(){
//     //      return  
//     //     })
        

         
       
//     })
      
// };


// //    const initialQuestions = async() => {
// //         // new Promise((resolve,reject)=>{
// //             //here our function should be implemented 
   
// //       return inquirer
// //         .prompt(question.startupQuestionPrompt())
// //         .then( (data) => {
            
// //        switch ( data['introQuestion']){
// //            case "View All Employees":
// //              view.viewEmployees();
// //              initialQuestions();
// //              break
// //            case "Add Employee":
// //              addEmployee();
// //              initialQuestions();
// //              break
// //            case "Update Employee Role":
// //              view.updateEmployee();
// //              initialQuestions();
// //              break
// //            case "View All Roles":
// //              view.viewRoles();
// //              initialQuestions();
// //              break
// //            case "Add Role":
// //              addRole();
// //              initialQuestions();
// //              break
// //            case "View All Departments":
// //              view.viewDepartments();
// //              initialQuestions();
// //              break
// //            case "Add Department":
// //            addDepartment()
// //            initialQuestions();
// //              break
// //            case "Quit":
// //             console.log("\n Goodbye! \n")
// //             resolve();
        
// //        }
      
// //      })
     
// // };
//     //   )};

// // function initialQuestions(){
// //     return  inquirer
// //        .prompt(question.startupQuestionPrompt())
// //        .then((data) => {
// //       switch (data['introQuestion']){
// //           case "View All Employees":
// //             viewEmployees();
// //             break
// //           case "Add Employee":
// //             addEmployee();
// //             break
// //           case "Update Employee Role":
// //             updateEmployee();
// //             break
// //           case "View All Roles":
// //             viewRoles();
// //             break
// //           case "Add Role":
// //             addRole();
// //             break
// //           case "View All Departments":
// //             viewDepartments();
// //             break
// //           case "Add Department":
// //           addDepartment()
          
// //             break
// //           case "Quit":
// //             console.log("\n Goodbye! \n")
// //             process.exit(0);
            

// //       }
     
// //     });
    
// //   }
// module.exports = {addEmployee, addRole, addDepartment};