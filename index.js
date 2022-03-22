const fs = require("fs");
const path = require("path");
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./Develop/utils/generateMarkdown');

const generateProject = require("./Develop/src/page-template.js");

const renderLicenseSection = require("./Develop/src/license-template.js");

// TODO: Create an array of questions for user input

// const questions = []

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your README?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please name the readme");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmDescription",
    message: "Would you like a description added?",
    default: true,
  },
  {
    type: "input",
    name: "descriptionTitle",
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
];

//create the write file
const writeFile = (fileContent) => {
  return fs.writeFile("Develop/dist/README.md", fileContent, (err) => {
    if (err) {
      reject(err);
      return;
    }

    resolve({
      ok: true,
      message: "File created!",
    });
  });
};

//generate the questions
//pass the questions to inquirer
//pass the responses to the generate file

//if I wanted to use different sections, how would I do that? components?
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generate README...");
    writeFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

init();
