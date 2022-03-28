const fs = require("fs");
const badges = "../src/badges-index.json";

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
//created a second layer
// function jsonReader(filePath, languageName, cb) {
//   try {
//     const jsonString = fs.readFileSync(filePath);
//     const jsObject = JSON.parse(jsonString);
//     const objectKeys = Object.keys(jsObject.languages);
//     for (i = 0; i < objectKeys.length; i++) {
//       if (jsObject.languages[i].Name == languageName) {
//         console.log(jsObject.languages[i].Badge);
//         return jsObject.languages[i].Badge;
//       }
//     }
//     // console.log("Ln 31 - Badge string: ", jsObject.languages[17].Badge);
//   } catch (err) {
//     return cb && cb(err);
//   }
// }

// jsonReader(badges, "JavaScript");

function badgeReader(filePath, section, choice, cb) {
  console.log(filePath, section, choice)
  try {
    // console.log("Ln 57: In try");
    const jsonString = fs.readFileSync(filePath);
    // console.log("Ln 59: jsonString: ", jsonString);
    const jsObject = JSON.parse(jsonString);
    // console.log("Ln 60: jsObject ", jsObject);
    const sectionKeys = Object.keys(jsObject);
    // console.log("Ln 63: Section Keys: ", sectionKeys);
    for (i = 0; i < sectionKeys.length; i++) {
      // console.log("Ln 65: i =", i)
      // console.log("Ln 66: sectionKeys.length ", sectionKeys.length)
      // console.log("Ln 67: ", sectionKeys[i]);
      var singleKey = sectionKeys[i];
      // console.log("Ln 69: ", singleKey)
      // console.log("Ln 70: ",jsObject[singleKey]);
      if (singleKey == section) {
        // console.log("Ln 72: ",jsObject[singleKey])
        const choiceKeys = Object.keys(jsObject[singleKey]);
        // console.log("Ln 75: Choice Keys: ", choiceKeys);
        for (j = 0; j < choiceKeys.length; j++) {
          // console.log("Ln 76: Choice - ", choice)
          const singleChoice = choiceKeys[j];
          // console.log("Ln 78: ", singleChoice);
          // console.log("Menu Options: ", jsObject[singleKey][singleChoice].Name);
          // console.log('Ln 80: Choice Name ',jsObject[singleKey][singleChoice].Name);
          if (jsObject[singleKey][singleChoice].Name == choice) {
            console.log("Ln 82: ", jsObject[singleKey][singleChoice].Badge);
            return jsObject[singleKey][singleChoice].Badge;
          }
        }
      }
    }
  } catch (err) {
    return cb && cb(err);
  }
}

badgeReader(badges, "databases", "MySQL");
badgeReader(badges, "languages", "JavaScript");

module.exports = badgeReader;

