const { Router } = require('express');
const { getCountries,
        getCountryById
    } = require('../handlers/countryHandler.js');

const countryRouter = Router();

//* Lista de Paises, todos ó segun Name
countryRouter.get("/", getCountries);

//* Detalle de un solo Pais, con sus Activities
countryRouter.get("/:idPais", getCountryById);

module.exports = countryRouter;
