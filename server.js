const express = require('express');
const questions = require('./lib/questions.js');

const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: 'rootroot',
      database: 'management_db'
    },
    console.log(`Connected to the management_db database.`)
  );
  db.query('CREATE TABLE departments(id)', function (err, results) {
   // console.log(results);
  });

  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

// add department function


// add roles function 


// add employees function


//
  function initialQuestions() {
    
    return   inquirer
       .prompt(questions)
       .then((data) => {
           const nameOfManager = new Manager(data.teamManager, data.managerID, data.managerEmail, data.managerOfficeNumber)
   })
   };

   const runner = async () => {
    const departmentInfo = await initialQuestions();
    //managercard(askQ);
    console.log("Manager has been added!")
    
    const moreQ = await askMoreMembers();
    const docmake = await docCreate();
    // console.log(moreQ)
    
    // await htmlgen();
    // await htmlcard();
    }
    runner();

  