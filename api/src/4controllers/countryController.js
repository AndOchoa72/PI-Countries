const { Country, Activity} = require("../db.js");
const { Op } = require("sequelize");

const createCountry = async (co) => {
  if (!co.capital) co.capital = ['None-assigned'];
  if (!co.subregion) co.subregion = 'None-assigned';
  await Country.create({
    id: co.cca3.toUpperCase(),
    name: co.name.common,
    nameformal: co.name.official,
    flag: co.flags[1],
    continent: co.continents[0],
    capital: co.capital[0],
    subregion: co.subregion,
    area: co.area,
    population: co.population
  });
};        

const getAllCountries = async () => {
  const bDCountries = await Country.findAll({
    order: ['id']
  });
  return bDCountries;
};

const getCountryById = async ( myId ) => {
  //console.log(`Buscando el Country: ${myId}`);
  const aCountry = await Country.findByPk(
    myId.toUpperCase(), {
      include: {
        model: Activity // Clase 3, 1h39m
      }
    });
  return aCountry;        
};

const getCountriesByName = async ( myName ) => {
  const namedCountries = await Country.findAll(
    { where:
      {
        [ Op.or ]: [
          {name:
            {
              [Op.iLike]: `%${myName}%`
            }
          },
          {nameformal:
            {
              [Op.iLike]: `%${myName}%`
            }
          },
          {id:
            {
              [Op.iLike]: `%${myName}%`
            }
          }
        ]
      }
    }
  );
  //console.log(JSON.stringify(namedCountries));
  //console.log(namedCountries.length);
  return namedCountries;
};

module.exports = {
  createCountry,
  getAllCountries,
  getCountryById,
  getCountriesByName };
