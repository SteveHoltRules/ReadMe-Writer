//create the readMe array

//In creating the readme array, it has to be sequential, and the TOC has to be self generated based on the headings...
//Extended, create a template in
const generateTOC = (aboutTOC) => {
  const concreteTOC = [...aboutTOC];
  if (!aboutTOC) {
    return "";
  }
};

//How do I only pass into the generate projects the variables that are passed from the prompt?

const generateProject = (readMeArr) => {
  // console.log(readMeArr);
  const remainder = Object.values(readMeArr);
  // console.log("This is remainder", remainder);
  const format = [];
  for (var i = 0; i < remainder.length; i++) {
    format.push(`
## ${remainder[i]}
`);
  }
  format.push(`
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Badges](#badges)
6. [Features](#features)
7. [Contributing](#contributing)
8. [Tests](#tests)

## Installation

## Usage

## Credits

## License

## Badges

## Features

## Contributing

## Tests`);
  // console.log("This is format", format.join(" "));
  const mdText = format.join(" ");
  // console.log("This is mdText", mdText, typeof(mdText));
  return mdText;
};



module.exports = generateProject;
