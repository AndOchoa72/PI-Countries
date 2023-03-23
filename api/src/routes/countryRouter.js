const { Router } = require('express');
const { getCountries,
        getCountryById
    } = require('../handlers/countryHandler.js');

const countryRouter = Router();

//* List Countries, all or by Name
countryRouter.get("/", getCountries);

//* One Country detail, with all its Activities
countryRouter.get("/:id", getCountryById);

module.exports = countryRouter;
