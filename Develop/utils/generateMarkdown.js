const fetch = require("node-fetch");

const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

const renderLicenseBadge = (userName, repoName) => {
  //set username - repo data - from example walkthrough
  `https://shields.io/github/issues/${userName}/${repoName}`;
};

console.log(renderLicenseBadge());

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   var license = getlicense;
  `https://shields.io/github/${license}/${userName}/${repoName}`//return the license link from the license json based on input
  `https://shields.io/github/${license}/${userName}/${repoName}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//The render license section worked!!!! It fetches everything as an object
var renderLicenseSection = function (license) {
  var apiUrl = `https://api.github.com/licenses/${license}`;
  console.log(apiUrl);
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          shortDesc = data.description;
          console.log(shortDesc);
          setofPerm = data.permissions;
          console.log(setofPerm);
          setofCond = data.conditions;
          console.log(setofCond);
        });
      }
    })
    .catch(function (error) {
      //notice this catch getting changed out to the end of the .then()
      alert("Unable to connect to gitHub license");
    });
};


//create the write file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./develop/dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

module.exports = renderLicenseSection;
// module.exports = { writeFile };

// const copyFile = fileContent => {
//   return new Promise((resolve, reject) => {
//     fs.copyFile('./src/styles.css', '')
//   })
// }

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// const genearteMarkdown = (title, description, toc, ul, ol, li, links, features, contributing, tests) => {
//   return `
//   #${title}
//   ${description}
//   ${}`
// }