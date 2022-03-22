const fs = require("fs");
const path = require("path");
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Languages used to create this - are there badges for this?
// const questions = []

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please name the readme");
        return false;
      }
    },
  },
  //how could I change this to add excemptions that would only include the sections selected instead of the whole piece?
  {
    type: "confirm",
    name: "confirmDescription",
    message: "Would you like a description added?",
    default: true,
  },
  {
    type: "input",
    name: "description",
    message: "What is your description title?",
    when: ({ confirmDescription }) => {
      if (confirmDescription) {
        return true;
      } else {
        return false;
      }
    },
    validate: (dtitleInput) => {
      if (dtitleInput) {
        return true;
      } else {
        console.log("Please title the description");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What type of license is included for this project?",
    choices: [
      "MIT",
      "LGPL-3.0",
      "MPL-2.0",
      "AGPL-3.0",
      "Unlicense",
      "Apache-2.0",
      "GPL-3.0",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

//create the write file
//writefile takes in the path, then adds the name, and outputs to the path location
function writeFile (filename, data) {
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
};

//generate the questions
//pass the questions to inquirer
//pass the responses to the generate file

//if I wanted to use different sections, how would I do that? components?
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generate README...');
    writeFile('README.md',generateMarkdown({ ...inquirerResponses }));
  });
}

init();