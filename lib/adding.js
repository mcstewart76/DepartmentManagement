const question = require('./questions');
const server = require('../server');

//Add Employee Function
function addEmployee(){
    return inquirer
    .prompt(question.addDepartment)
    .then((data) => {
        console.log(data.departmentName)
        console.log(data['departmentName'])
        //add to schema here
        server.initialQuestions();

    });
};

//Add Role Function
function addRole(){
    return 
};

//Add Department Function
function addDepartment(){
    return 
};

module.exports = {addEmployee, addRole, addDepartment}