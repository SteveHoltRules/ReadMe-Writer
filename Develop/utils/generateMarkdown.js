const fs = require('fs');

//Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
   
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // If there is no license, return an empty string
  return "";
};

console.log(renderLicenseBadge());

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
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
//Finish the rest tomorrow
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  *[Usage](#usage)
  ${renderLicenseLink(data.license)}`
}


module.exports = generateMarkdown;
