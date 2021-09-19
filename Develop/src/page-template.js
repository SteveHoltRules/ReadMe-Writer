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
##${remainder[i]}
`);
    };
  console.log("This is format");
  console.log(format.join(' '));
  const mdText = format.join(' ').toString();
  console.log("This is mdText");
  console.log(mdText);
  return mdText; 
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


//   return `
// # ${readMeArr.title}
//   ${readMeArr.map(({ title, descriptionTitle }) => {
//     if (!title) {
//       readMeArr.descriptionTitle;
//     } else {
//     }
//   })}`;
