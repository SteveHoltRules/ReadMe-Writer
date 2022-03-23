const fs = require('fs');


//Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
   
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // If there is no license, return an empty string
  return "";
};

function renderBadge(badge) {
  if (license !== 'None') {
    return 
    // If I use this type of setup without a json array, then I am recreating this for each item that is different
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
}

function badgeLink(badge) {
  if (badge !== "None") {
    return `* [Badges](#badges)`;
  }
  return '';
}

//Create a function tht returns the license section of the README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License 
    
  This project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Credits](#credits)
  * [Badges](#badges)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  To install necssary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}
  
  ## Test

  To run test, run the following command: 
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  
  `;
}


module.exports = generateMarkdown;
