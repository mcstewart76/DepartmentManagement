const Sequelize = require('sequelize');
//const mysql = require('mysql2');

require('dotenv').config();

let sequelize;

if (process.env.MYSQL_URL) {
  sequelize = new Sequelize(process.env.MYSQL_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    { 
      logging: false,
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      
    }
    
  );
}
// const mysql = require("mysql2");
// const connection = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'rooter',
//       database: 'management_db'
//     },
//     console.log(`Connected to the management database.`)
//   );

  module.exports = sequelize;

