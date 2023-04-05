const { Router } = require('express');
const { getCountriesHandler, getCountryByIdHandler
  } = require('../handlers/countryHandler.js');
    
const countryRouter = Router();

//* List Countries, all or by Name

countryRouter.get("/", getCountriesHandler);

//* One Country detail, with all its Activities
countryRouter.get("/:id", getCountryByIdHandler);

module.exports = countryRouter;
