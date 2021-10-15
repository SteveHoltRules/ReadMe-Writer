const fetch = require("node-fetch");

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//The render license section worked!!!! It fetches everything as an object
var renderLicenseSection = function (license) {
  var apiUrl = `https://api.github.com/licenses/${license}`;
  console.log(apiUrl);
  var licenseSect = [];
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          licenseSect.push(`${data.description}
`);
          console.log(licenseSect);
          licenseSect.push(`${data.permissions}
`);
          console.log(licenseSect);
          licenseSect.push(`${data.conditions}`);
          console.log(licenseSect);
          const newLicenseSect = licenseSect.join(' ');
          console.log(typeof(newLicenseSect));
          return newLicenseSect;
        });
      }
    })
    .catch(function (error) {
      //notice this catch getting changed out to the end of the .then()
      alert("Unable to connect to gitHub license");
    });
};



var renderBadge = function (license) {
  var shieldBadge = `https://shields.io/github/${license}`;
  console.log(typeof(shieldBadge));
  return shieldBadge;
  // fetch(shieldBadge)
  //   .then(function (response) {
  //     if (response.ok) {
  //       response.json().then(function (data) {
  //         console.log(shieldBadge);
  //         const shield = shieldBadge.join('');
  //         return shield;
  //       });
  //     }
  //   })
  //   .catch(function (error) {
  //     //notice this catch getting changed out to the end of the .then()
  //     alert("Unable to connect to gitHub license");
  //   });
};

const licenseandBadge = (license) => {
  renderLicenseSection(license);
  console.log(renderLicenseSection(license));
  // renderBadge(license);
  // console.log(renderBadge);
};

//Currently the export is not waiting on the API return
module.exports = renderLicenseSection;
// module.exports = licenseandBadge;
