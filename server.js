const express = require('express');
const sequelize = require('./config/connection')
const models = require('./models');
//const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on' + PORT));
});
  
  

//////////////////////////////////////////////////////////////////////
  // function initialQuestions() {
    
  //   return   inquirer
  //      .prompt(questions)
  //      .then((data) => {
  //          const nameOfManager = new Manager(data.teamManager, data.managerID, data.managerEmail, data.managerOfficeNumber)
  //  })
  //  };

  //  const runner = async () => {
  //   const departmentInfo = await initialQuestions();
  // const whichever = await blan();
  //   const docmake = await docCreate();
  //   
  //   }
  //   runner();

  