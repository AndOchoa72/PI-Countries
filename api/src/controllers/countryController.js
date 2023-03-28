const { Country} = require("../db.js");

const createCountry = async (co) => {
    if (!co.capital) co.capital = ['None-assigned'];
    if (!co.subregion) co.subregion = 'None-assigned';
    if (co.cca3==='AFG') // Ex Afghanistan Flag (now Taliban flag)
        co.flags[1] = 'https://flagcdn.com/w320/af.png'; 
/*
    console.log(
        co.cca3,
        co.name.official,
        co.flags[1],
        co.continents[0],
        co.capital[0],
        co.subregion,
        co.area,
        co.population
);// */
    await Country.create({
        id: co.cca3,
        name: co.name.official,
        flag: co.flags[1],
        continent: co.continents[0],
        capital: co.capital[0],
        subregion: co.subregion,
        area: co.area,
        population: co.population
    });
};        

const getAllCountries = async () => {
    const BDCountries = await Country.findAll();
    return [...BDCountries];
};

module.exports = { createCountry, getAllCountries };
