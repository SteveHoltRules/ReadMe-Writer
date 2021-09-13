const fetch = require('node-fetch');

// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

const renderLicenseBadge = (userName, repoName) => {
//set username - repo data - from example walkthrough
  `https://shields.io/github/issues/${userName}/${repoName}`
} 

console.log(renderLicenseBadge())

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  `https://shields.io/github/${license}/${userName}/${repoName}`
  //return the license link from the license json based on input
  `https://shields.io/github/${license}/${userName}/${repoName}`

 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
async function getPosts(userId) {
  const response = await fetch(
    `https://api.github.com/licenses/gpl-3.0`
);

}



const renderLicenseSection = function () { 

  var apiUrl = `https://api.github.com/licenses/gpl-3.0`;
  console.log(apiUrl);
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        // var shortDesc = data.description;
        // console.log(shortDesc);
      });
    };
  })
  //parse the license and return it as parts

};

renderLicenseSection();
  //
  
  // ${license
  //     .filter(({ feature }) => feature)
  //     .map(( { }))}

 
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

// module.exports = generateMarkdown;
