const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');


//Linking role to department via foreign key
Role.belongsTo(Department, {
    foreignKey: 'department_id',
});

// Linking Employee to Role via Foreign Key
Employee.belongsTo(Role, {
  foreignKey: 'role_id',
});

// Linking Employee to Manager 
Employee.belongsTo(Employee, {
    foreignKey: 'manager_id',
});


module.exports = { Department, Role, Employee };