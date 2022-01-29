const startupQuestion = [
    // Prompts initial question
    {
    type: 'list',
    name: 'introduction',
    message: 'What would you like to do?',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit' ],
    loop: choices,

    }, 
];

const departmentQuestion = [
    // Prompts Department to Add
    {
    type: 'input',
    name: 'departmentName',
    message: 'What is the name of the department you wish to add?',
    },
    
]

const roleQuestions = [
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

const employeeQuestions = [
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
        type: 'input',
        name: 'employeeRole',
        message: 'What is the role of the employee you wish to add?',
    },
    // Prompt Employee's Manager
    {
        type: 'list',
        name: 'employeeManager',
        message: 'Who is the manager of the employee you wish to add?',
        choices: [],
    },

]

const employeeUpdate = [
    {
        type: 'list',
        name: 'employeeRoleList',
        message: 'Which employee role do you wish to update?',
        choices: [],
    },
    {
        type: 'list',
        name: 'employeeRoleSelect',
        message: 'Which role do you want to assign the selected employee?',
        choices: [],
    },
]


module.exports = questions;