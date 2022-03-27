const fs = require('fs');
const badges = '../src/badges-index.json';

// const langString = 'JavaScript'

//How do I assign fs.readFile to a variable?

// fs.readFile("../src/badges-index.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   try {
//     I need to add the variable that will be passed into this in order to retrieve the badge
//     const jsbadge = JSON.parse(jsonString);
//     const objectKeys = Object.keys(jsbadge.languages)
//     for (let i = 0; i < objectKeys.length; i++) {
//       console.log("Ln 17 Type of: ", typeof langString);
//       console.log("Ln 18 Type of: ", jsbadge.languages[17].Name)
//       console.log(i, jsbadge.languages[i].Name);
//       if (jsbadge.languages[i].Name == langString) {
//         console.log("Ln 20: ", jsbadge.languages[i].Name);
//         console.log(i);
//       }
//     }
//     console.log("Badge string: ", jsbadge.languages[17].Badge); //=>language name
//   } catch (err) {
//     console.log("Parsing error", err);
//   }
// });

//Assign to a variable
//readFileSync is not working
function jsonReader(filePath, languageName, cb) {
  try {
    const jsonString = fs.readFileSync(filePath);
    const jsObject = JSON.parse(jsonString);
    const objectKeys = Object.keys(jsObject.languages);
    for (i = 0; i < objectKeys.length; i++) {
      if (jsObject.languages[i].Name == languageName) {
        console.log(jsObject.languages[i].Badge);
        return jsObject.languages[i].Badge;
      }
    }
    // console.log("Ln 31 - Badge string: ", jsObject.languages[17].Badge);
  } catch (err) {
    return cb && cb(err);
  }
};

jsonReader(badges, 'JavaScript');


module.exports = jsonReader;
//how do I find the selected language in an array?
//make a note of the place in the array, so find the matching name and iterate through the name, then return the iterator number.
//how can I include this badge into my project?
//how can I recall this same functionality for multiple badges?

//After inqurier runs, it will return inquiries, and these functions will have to go into the generate markdown as a sync file instead of async
//This function can be portable if I assign it to a function call and then export it.

