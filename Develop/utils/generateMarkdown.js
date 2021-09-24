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

//create the write file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('Develop/dist/README.md', fileContent, err => {
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

module.exports = { writeFile };

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