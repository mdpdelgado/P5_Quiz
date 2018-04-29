//const path = require('path');

// Load ORM
const Sequelize = require('sequelize');

// To use SQLite data base:
const sequelize = new Sequelize("sqlite:quiz.sqlite");

// Import the definition of the Quiz Table from quiz.js
//sequelize.import(path.join(__dirname, 'quiz'));

 sequelize.define('quiz',
    {
        question: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "Question must not be empty"}}
        },
        answer: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "Answer must not be empty"}}
        }
    });

// Create tables
sequelize.sync()
    .then(() => console.log('Data Bases created successfully'))
    .then(() => sequelize.models.quiz.count())
    .then(count => {
        if(!count){
            return sequelize.models.quiz.bulkCreate([
                { question: "Pregunta Número 1", answer: "hola"},
                { question: "Capital de Italia", answer: "Roma"},
                { question: "Capital de Francia", answer: "París"},
                { question: "Capital de España", answer: "Madrid"},
                { question: "Capital de Portugal", answer: "Lisboa"}
            ]);
        }

    })
    .catch(error => {
        console.log("Error creating the data base tables:", error);
        process.exit(1);
    });


module.exports = sequelize;