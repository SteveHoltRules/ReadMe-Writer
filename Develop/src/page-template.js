//create the readMe array
const generateProject = (readMeArr) => {
  console.log(readMeArr);
  return `
# ${readMeArr.title}

## ${readMeArr.descriptionTitle}

${readMeArr.description}

# Table of Contents
  1.[Title](#title)

`
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
