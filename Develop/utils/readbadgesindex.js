const fs = require('fs');
const badges = require('../src/badges-index.json');

//How do I assign fs.readFile to a variable?
fs.readFileSync("../src/badges-index.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const jsbadge = JSON.parse(jsonString);
    console.log("Badge string: ", jsbadge.languages[17].Badge); //=>language name
  } catch (err) {
    console.log("Parsing error", err);
  }
});

//Assign to a variable
function jsonReader(filePath, cb) {

}

//how do I find the selected language in an array?
//make a note of the place in the array, so find the matching name and iterate through the name, then return the iterator number.
//how can I include this badge into my project?
//how can I recall this same functionality for multiple badges?

//After inqurier runs, it will return inquiries, and these functions will have to go into the generate markdown as a sync file instead of async
//This function can be portable if I assign it to a function call and then export it.

