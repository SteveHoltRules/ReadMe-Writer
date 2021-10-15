// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const { writeFile } = require("./Develop/utils/generateMarkdown.js");

const generateProject = require("./Develop/src/page-template.js");

const renderLicenseSection = require("./Develop/src/license-template.js");

// TODO: Create an array of questions for user input

// const questions = []

var readMeObj = {};

const readMeTitle = () => {
  if (!readMeObj) {
    readMeObj = {};
  }
  return inquirer
    .prompt([
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
    ])
    .then((readMeData) => {
      console.log("This is readMeData", readMeData);
      readMeObj = Object.assign(readMeData);
      console.log("This is readMeObj with the first assign", readMeObj);
      return readMeObj;
    });
};

const readMeSections = () => {
  //test the readMeObj
  console.log(readMeObj);
  return inquirer
    .prompt([
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
    ])
    .then((readMeArrDesc) => {
      console.log(readMeObj);
      console.log(readMeArrDesc);
      if (readMeArrDesc.confirmDescription) {
        readMeObj["descriptionTitle"] = readMeArrDesc.descriptionTitle;
        return readMeObj;
      } else { 
        return readMeObj;
      }
    });
};



const license = () => {
  //for the license - the template should include all of the formatting and just display the selected license + badge that is driven from the link
  return inquirer
    .prompt([
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
    ])
    .then((licenseData) => {
      console.log("This license");
      console.log(licenseData);
      let licenseObj = Object.values(licenseData);
      licenseObj.join(' ');
      console.log("This is readMeObj with the License assign");
      console.log(licenseObj);
      return licenseObj;
    });
};

// TODO: Create a function to initialize app
readMeTitle()
  .then(readMeSections)
  .then((readMeObj) => {
    return generateProject(readMeObj);
  })
  //my stuck - I am attempting to retrieve functions here and returning two separate strings. 
  // .then(license)
  // .then((license) => {
  //   return renderLicenseSection(license);
  // })
  .then((generateMarkdown) => {
    writeFile(generateMarkdown);
});
