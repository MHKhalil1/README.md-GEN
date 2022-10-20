// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
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
        choices: ['MPL 2.0','GNU','Apache','MIT','None'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
