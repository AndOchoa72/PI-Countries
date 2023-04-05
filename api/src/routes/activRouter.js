const { Router } = require('express');
const { getActivitiesHandler,
  createActivityHandler
  } = require('../handlers/activityHandler.js');

const activRouter = Router();

console.log('Acivities...');

//* List all Activities
activRouter.get("/", getActivitiesHandler);

//* Create new Activity
activRouter.post("/", createActivityHandler);

module.exports = activRouter;
