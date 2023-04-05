//* countryHandler.js

const { getAllCountries, getCountryById, getCountriesByName
  } = require("../4controllers/countryController");

  const getCountriesHandler = async (req, res) =>{

  let myName = req.query.name;
  if (myName !== undefined) {
    //* Filters by Name
    //* Ignores Case
    //* If no matches, then Message
    try {
      const aCountry = await getCountriesByName(myName);
      res.status(200).json(aCountry);        
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    //* Return Array with all the Countries
    try {
      const bDCountries = await getAllCountries();
      res.status(200).json(bDCountries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const getCountryByIdHandler = async (req, res) => {
    //* One Country detail, with all its Activities
    let { id } = req.params;
    try {
        const aCountry = await getCountryById( id.toUpperCase() );
        res.status(200).json(aCountry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getCountriesHandler,
    getCountryByIdHandler
};
