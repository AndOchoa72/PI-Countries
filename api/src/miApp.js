
// * * miApp.js

const axios = require('axios');
const { Country, Activity, conn } = require("./db.js");
const { createCountry } = require('./controllers/countryController.js');

var miLog = true;
// todo:  Si quiero mostrar registros, Comento:
/*
miLog = !miLog;
// */
// delete from countries where id = 'ARG';
// select count (*) from countries;

var t0, tf = 0;

const miDelay = (msg) => {
    tf = performance.now();
    if (miLog) {
    console.log('\\==> ' + msg + ' DT: ' + (tf - t0).toFixed(0) + ' ms.')};
    t0 = tf;
};

const miApp = async () => {

    var cca = 0;
    t0 = performance.now();
    t00 = t0;

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

            const { allCountriesLocalFile } = require('./allCountries.json.js');
            allCountriesRaw = allCountriesLocalFile;
            miDelay('Reading from Local JSON File');
        }

        // * Sort Countries by cca3 here

        t0 = performance.now();
        cca = allCountriesRaw.length;
        for (let n = 0; n < cca; n++) {
            const co = allCountriesRaw[n];
            await createCountry(co);
        }; 
        miDelay('Saving Countries into DataBase');

        cca = await Country.count();
        if (miLog) {console.log(`There are ${cca.toString()} countries`)};

        miDelay('Counting Countries');
        };
    };

module.exports = miApp;
