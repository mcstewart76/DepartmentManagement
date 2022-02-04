// const sequelize = require('../config/connection');


// const roleChoices =  sequelize.query('SELECT * FROM management_db.role')
// const employeeChoices =  sequelize.query('SELECT * FROM management_db.employee')
// const managerChoices =  sequelize.query('SELECT * FROM management_db.department')
 
startupQuestion = [
    // Prompts initial question
                {
                type: 'list',
                name: 'introQuestion',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit' ],
           

                }, 
            ]




     addDepartment = [
    // Prompts Department to Add
                {
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of the department you wish to add?',
                },
    
            ]




     addRole = [
    //Prompt for the role name
                {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the role you wish to add?',
                },
    //Prompt for the role's salary
                {
                type: 'input',
                name: 'roleSalary',
                message: 'What is the salary of the role?',
                },
    //Prompt for the role's department
                {
                type: 'list',
                name: 'roleDepartment',
                message: 'Which department does the role belong to?',
                choices: [],
                
                }, 
    
            ]




     addEmployee = [
    //Prompt Employee First Name
                {
                type: 'input',
                name: 'employeeFirstName',
                message: 'What is the first name of the employee you wish to add?',
                },
    // Prompt Employee Last Name
                {
                    type: 'input',
                    name: 'employeeLastName',
                    message: 'What is the last name of the employee you wish to add?',
                },
    // Prompt Employee Role
                {
                    type: 'list',
                    name: 'employeeRole',
                    message: 'What is the role of the employee you wish to add?',
                    choices: [],
                },
    // Prompt Employee's Manager
                {
                    type: 'list',
                    name: 'employeeManager',
                    message: 'Who is the manager of the employee you wish to add?',
                    choices: [],
                },

            ]



     employeeUpdate = [
    // Prompts Employee List for Update
                {
                    type: 'list',
                    name: 'employeeList',
                    message: 'Which employee do you wish to update?',
                    choices: [],
                },
    // Prompts for Role to Assign Employee
                {
                    type: 'list',
                    name: 'employeeRoleSelect',
                    message: 'Which role do you want to assign the selected employee?',
                    choices: [],
                },
            ]



// function initialQuestions(){
//     return  inquirer
//        .prompt(question.startupQuestionPrompt())
//        .then((data) => {
//       switch (data['introQuestion']){
//           case "View All Employees":
//             viewEmployees();
//             break
//           case "Add Employee":
//             addEmployee();
//             break
//           case "Update Employee Role":
//             updateEmployee();
//             break
//           case "View All Roles":
//             viewRoles();
//             break
//           case "Add Role":
//             addRole();
//             break
//           case "View All Departments":
//             viewDepartments();
//             break
//           case "Add Department":
//           adding.addDepartment()
          
//             break
//           case "Quit":
//             console.log("\n Goodbye! \n")
//             process.exit(0);

//       }
     
//     });
    
//   }

module.exports = {startupQuestion, addDepartment, addRole, addEmployee, employeeUpdate}

