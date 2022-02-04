const sequelize = require('./config/connection');
const inquirer = require('inquirer');


//Imports questions from other file
 const question = require('./lib/questions');

// For seeding only
const models = require('./models');
const Employee = require('./models/Employee');
const Department = require('./models/Department');
const Role = require('./models/Role');
const seedDepartmentData = require('./seeds/departmentSeedData.json');
const roleSeedData = require('./seeds/roleSeedData.json');
const employeeSeedData = require('./seeds/employeeSeedData.json')

//Seeds Database
function seedDatabase  () {
   return sequelize.sync({ force: true }).then(() => {
    Department.bulkCreate(seedDepartmentData)
    Role.bulkCreate(roleSeedData)
    Employee.bulkCreate(employeeSeedData)
  })
};
 
//////////////////////////////////////////////////////////////////////
// % App Starter %
//////////////////////////////////////////////////////////////////////

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

// // ///////////////////////////////////////////////////////
// // %% App Questions %%
// /////////////////////////////////////////////////////
//Add Department Function
  function addDepartment () {
    inquirer
    .prompt(question.addDepartment)
        .then(function(data) {
            console.log(data.departmentName + ' was added!')

                Department.create({
        
                    "name": data.departmentName
                    
                })
      
        }).then(function(){
          initialQuestions();
        })
      
  };

  // Add Role Function
  function addRole() {
    
       sequelize.query('SELECT id, name FROM management_db.department', {model : Department}).then(function(departments){
        let departmentChoices = [];
        for (var x = 0; x < departments.length; x++) {
          departmentChoices.push({name: `${departments[x].dataValues.name}`, value: departments[x].dataValues.id})
        // let departmentChoices = {name: departments[x].dataValues.name, value: departments[x].dataValues.id};
      }
        
        //{name: `${res[i].name}`, value: res[i].id}{name:`${departments.dataValues.name}`, value: `${departments.dataValues.id}`}
        console.log(departmentChoices);
        question.addRole[2].choices = departmentChoices
       });
                inquirer
                  .prompt(question.addRole)
                    .then(function(data) {
                        
                        //add to schema here
                        Role.create({
                    
                          "title": data.roleName,
                          "salary": data.roleSalary,
                          "department_id": data.roleDepartment
                      })
                        
                    }).then(function(){
                      initialQuestions();
                    })
                   
  };    
  // Add Employee Function

  function addEmployee() {
    
    sequelize.query('SELECT id, title FROM management_db.role', {model : Employee}).then(function(roles){
     let roleChoices = [];
     for (var x = 0; x < roles.length; x++) {
       roleChoices.push({name: `${roles[x].dataValues.title}`, value: roles[x].dataValues.id})
     // let departmentChoices = {name: departments[x].dataValues.name, value: departments[x].dataValues.id};
   }
     
     //{name: `${res[i].name}`, value: res[i].id}{name:`${departments.dataValues.name}`, value: `${departments.dataValues.id}`}
    // console.log(departmentChoices);
     question.addEmployee[2].choices = roleChoices
    });
    sequelize.query('SELECT first_name, last_name, id FROM management_db.employee WHERE manager_id IS NULL', {model : Employee}).then(function(managers){
      let managerChoices = [{name: "None", value: null }];
      for (var x = 0; x < managers.length; x++) {
        managerChoices.push({name: `${managers[x].dataValues.first_name} ${managers[x].dataValues.last_name}`, value: managers[x].dataValues.id})
      // let departmentChoices = {name: departments[x].dataValues.name, value: departments[x].dataValues.id};
    }
    
      
      //{name: `${res[i].name}`, value: res[i].id}{name:`${departments.dataValues.name}`, value: `${departments.dataValues.id}`}
     // console.log(departmentChoices);
      question.addEmployee[3].choices = managerChoices
     
    });
             inquirer
               .prompt(question.addEmployee)
                 .then(function(data) {
                     if(data.employeeManager == null){
                       Employee.create({
                 
                       "first_name": data.employeeFirstName,
                       "last_name": data.employeeLastName,
                       "role_id": data.employeeRole,
                      // "manager_id": null,

                      
                       
                   }) 
                     }else{
                      Employee.create({
                 
                        "first_name": data.employeeFirstName,
                        "last_name": data.employeeLastName,
                        "role_id": data.employeeRole,
                       
                        "manager_id": data.employeeManager 
                      })
                    }
                     //add to schema here
                     
                     
                 }).then(function(){
                   initialQuestions();
                 })
                
};    



  
}//End of initial Questions function
const runner = async () => {
    seedDatabase();
    console.log("\n\n\n")
    console.log("Initilizing Application!")
    const docmake = await initialQuestions();
    
    }
    runner();