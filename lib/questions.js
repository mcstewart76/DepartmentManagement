const startupQuestion = [{
    type: 'list',
    name: 'introduction',
    message: 'What would you like to do?',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit' ],
    loop: choices,

    }, 
];

const departmentQuestion = [
    
    {
    type: 'input',
    name: 'departmentName',
    message: 'What is the name of the department you wish to add?',
    },
    
]


const roleQuestions= [
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
    choices: [ ],
    loop: choices,
    }, 
    
]



module.exports = questions;