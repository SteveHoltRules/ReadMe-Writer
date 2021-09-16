//create the readMe array
const generateProject = (readMeArr) => {
  console.log(readMeArr);
  return `
# ${readMeArr.title}
      
## ${readMeArr.descriptionTitle}

${readMeArr.description}

1. [Title](#title) 
2. [Desciption Title](#descriptionTitle)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Credits](#credit)
6. [License](#license)
7. [Badges](#badges)
8. [Features](#features)
9. [Contributing](#contributing)
10. [Tests](#contributing)`;

};


module.exports = generateProject;

// module.exports = (generateData) => {
//   console.log(generateData);

//   //destructure project and about data from template
//   //I can take the additional reference from the license here as license and then generate(license) down below like the generate(about)
//   const { readMe } = generateData;

//   return `
//   ${generateProject(readMe)}
//   ${generateProject}`;
// };
