
// * * miApp.js

const fs = require('fs');

allCountries = require('./allCountries.json.js');
/* *  "cca3": "BGD",
*/

const miApp = (server) => {
    var cca3 = '';
    cca1 = {};
    console.log(allCountries.length);
    for (unPais of allCountries) {
        cca3 = unPais.cca3;
        if (!cca1.hasOwnProperty(cca3)) {
            cca1[cca3] = [unPais.name.common];
        } else {
            cca1[cca3].push(unPais.name.common);
        }
    }
    Object.getOwnPropertyNames(cca1).forEach(function(val, idx, array) {
        console.log(idx + ": " + val + ": '" + cca1[val] + "'");
      });
};

module.exports = miApp;
