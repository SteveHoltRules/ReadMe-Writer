//create the readMe array
const generateProject = (readMeArr) => {
  return `
  ${readMeArr.map(({ title, descriptionTitle, description }) => {
      return `
# ${title}
      
## ${descriptionTitle}

${description}`;

    })
    .join('')}`;
};

module.exports = (generateData) => {
  console.log(generateData);

  //destructure project and about data from template
  //I can take the additional reference from the license here as license and then generate(license) down below like the generate(about)
  const { readMe } = generateData;

  return `
  ${generateProject(readMe)}`;
};
