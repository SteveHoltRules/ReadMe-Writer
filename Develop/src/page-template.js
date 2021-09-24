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
  console.log(readMeArr);
  const remainder = Object.values(readMeArr);
  console.log("This is remainder");
  console.log(remainder);
  const format = []
  for (var i = 0; i < remainder.length; i++) {
    format.push(`
## ${remainder[i]}
`);
    };
  format.push(`
1. [Title](#title) 
2. [Desciption Title](#descriptionTitle)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Credits](#credits)
6. [License](#license)
7. [Badges](#badges)
8. [Features](#features)
9. [Contributing](#contributing)
10. [Tests](#tests)

## Installation

## Usage

## Credits

## License

## Badges

## Features

## Contributing

## Tests`);
  console.log("This is format");
  console.log(format.join(' '));
  const mdText = format.join(' ');
  console.log("This is mdText");
  console.log(mdText);
  console.log(typeof(mdText));
  return mdText; 
};



module.exports = generateProject;
