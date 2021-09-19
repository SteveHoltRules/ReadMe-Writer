// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const { writeFile } = require("./Develop/utils/generateMarkdown.js");

const generateProject = require("./Develop/src/page-template.js");

// TODO: Create an array of questions for user input
// const questions = []; - why does give an empty array for questions?
readMeArr = [];

const readMeTitle = () => {
  if (!readMeArr) {
    readMeArr = [];
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
      console.log(readMeData);
      const data = Object.entries(readMeData);
      readMeArr.push(data);
      return readMeArr;
    });
};

const readMeDiscrip = () => {
  console.log(readMeArr);
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
          //   },
          // },
          // {
          //   type: "editor",
          //   name: "description",
          //   message: "What is a brief description of your project?",
          //   validate: (editorDescription) => {
          //     if (editorDescription) {
          //       return true;
          //     } else {
          //       console.log("Please write a description of your project");
          //       return false;
          //     }
        },
      },
    ])
    .then((readMeArrDesc) => {
      console.log(readMeArr);
      console.log(readMeArrDesc);
      if (readMeArrDesc.confirmDescription) {
        const data = Object.entries(readMeArrDesc);
        readMeArr.push(data);
        return readMeArr;
      } else {
        return readMeArr;
      }
    });
};

readMeTitle()
  .then(readMeDiscrip)
  .then((readMeArr) => {
    generateProject(readMeArr);
  });

//   (readMeArr) => {
//   return generateProject(readMeArr);
// })
// .then((generateMarkdown) => {
//   return writeFile(generateMarkdown);
// });
// .then((writeFileResponse) => {
//   console.log(writeFileResponse);
//   return copyFile();
// });

// const license = () => {
//   //for the license - the template should include all of the formatting and just display the selected license + badge that is driven from the link
//   return inquirer.prompt([
//     {
//       type: "list",
//       name: "license",
//       message: "What type of license is included for this project?",
//       choices: [
//         "MIT",
//         "LGPL-3.0",
//         "MPL-2.0",
//         "AGPL-3.0",
//         "Unlicense",
//         "Apache-2.0",
//         "GPL-3.0",
//       ],
//     },
//   ]);
// };

// const outLine = (outlineData) => {
//   if (!outlineData.outline) {
//     outlineData.outline = [];
//   }
//   console.log(`
//   =================
//   Add a New Project
//   =================`);
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the name of your project?",
//       },
//     ])
//     .then((readmeOutline) => {
//       outlineData.outline.push(readmeOutline);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portflioData;
//       }
//     });
// };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init()
//   .then(writeToFile)
