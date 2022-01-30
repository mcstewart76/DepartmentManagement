const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [30]
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [30]
      },
      roles_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: true,
      },
      manager_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'employee',
    }
  );

module.exports = Employee;

//CREATE TABLE employee (id INT NOT NULL AUTO_INCREMENT,first_name VARCHAR(30),last_name VARCHAR(30),roles_id INT,manager_id INT,PRIMARY KEY (id),FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE SET NULL,FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL);
