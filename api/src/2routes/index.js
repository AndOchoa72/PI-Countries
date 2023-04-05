const { Router } = require('express');
//*
const countryRouter = require('./countryRouter');
const activRouter = require('./activRouter');
// */
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

routes.use('/countries', countryRouter);

routes.use('/activities', activRouter);

module.exports = routes;
