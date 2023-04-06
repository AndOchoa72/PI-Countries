
// * * miApp.js

const axios = require('axios');
const { Country, Activity, conn } = require("./db.js");
const { createCountry } = require('./4controllers/countryController.js');

var miLog = true;
// todo:  Si quiero mostrar registros, Comento:
//*
miLog = !miLog;
// */
// delete from countries where id = 'ARG';
// select count (*) from countries;

var t0 = 0; // tf

const miDelay = (msg) => {
    tf = performance.now();
    if (miLog) {
    console.log('\\==> ' + msg + 
        //' DT: ' +
        ': ' +
        (tf - t0).toFixed(0) + ' ms.')};
    t0 = tf;
};

const miApp = async () => {

    var cca = 0;
    t0 = performance.now();
    t00 = t0;

/* //todo: Retrieving in Raw mode begin:

from GitHub - Sequelize:

https://github.com/sequelize/sequelize/issues/12188

The only thing that work:

const users = await User.findAll({
    attributes: [
      'id',
      'status'
    ],
    order: [['status', 'DESC']],
    include: join,
    raw: true
  });
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
  12345678901234567890123456
  26 * 26 = 676
  676 * 26 = 17576
 //*todo: Retrieving in Raw mode end:
  */
    cca = await Activity.count();
    if (miLog) {console.log(`There are ${cca} activities`)};
    miDelay('Counting Activities');

    cca = await Country.count();
    if (miLog) {console.log(`There are ${cca.toString()} countries`)};
    miDelay('Counting Countries');

    if (cca !== 250) {

        // * Delete allCountries from DB.

        await conn.query('DELETE FROM countries');
        miDelay(cca.toString() + ' <> 250, => Deleting Countries');

        try {

            // * Read from External API: V V V

            allCountriesRaw = (await axios.get(
                'https://restcountries.com/v3/all')).data;
            miDelay('ReDownloading Countries from API Server');

        } catch (error) {

            miDelay('ReDownloading from External API Server failed.');

            // * Read JSON from local file: V V V

            var { allCountriesLocalFile } = require('./allCountries.json.js');
            allCountriesRaw = allCountriesLocalFile;
            allCountriesLocalFile = '';
            miDelay('Reading from Local JSON File');
        }

        // * Sort Countries by cca3 here

        t0 = performance.now();
        cca = allCountriesRaw.length;
        for (let n = 0; n < cca; n++) {
            await createCountry(allCountriesRaw[n]);
        }; 
        miDelay('Saving Countries into DataBase');

        cca = await Country.count();
        if (miLog) {console.log(`There are ${cca.toString()} countries`)};

        miDelay('Counting Countries');
        };
    t0 = t00;
    miDelay('Total Time');
    };

module.exports = miApp;
