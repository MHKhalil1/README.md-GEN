// Packages For Application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of Questions
const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project',
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'License that will best suit project',
        choices: ['ISC','GNU','Apache','MIT','None'],
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to the project',
    },

    {
        type: 'input',
        name: 'test',
        message: 'How does the user test the project',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub Username',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter email',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
