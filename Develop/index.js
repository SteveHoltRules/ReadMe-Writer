// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your README?',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please name the readme');
          return false;
        }
      },
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license is included for this project?',
      choices: ('MIT', 'Apache License 2.0', 'GNU GPLv2','GNU GPLv3','ISC License', 'The Unlicense') 
    }
  ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init()
//   .then(writeToFile)

questions;

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHtml => {
//     return writeFile(pageHtml);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })