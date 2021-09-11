// TODO: Create a function that returns a license badge based on which license is passed in
const { Octokit } = require("@octokit/core");

// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

const renderLicenseBadge() => {

  fetch(Octokit.request('GET /licenses').then(response.json);

  `https://shields.io/github/issues/SteveHoltRules/JestAnotherRPG`

  //set username - repo data - from example walkthrough
}

console.log(renderLicenseBadge())

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

const genearteMarkdown = (title, description, toc, ul, ol, li, links, features, contributing, tests) => {
  return `
  #${title}
  ${description}
  ${}`
}

module.exports = generateMarkdown;
