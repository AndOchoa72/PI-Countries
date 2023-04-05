const { Router } = require('express');
const {
  createActivityHandler,
  getActivitiesHandler,
  getActivityByIdHandler } =
  require('../3handlers/activityHandler.js');

const activRouter = Router();

console.log('Acivities...');

//* Create new Activity
activRouter.post("/", createActivityHandler);

//* List all Activities
activRouter.get("/", getActivitiesHandler);

//* One Activity detail, with all its Countries
activRouter.get("/:id", getActivityByIdHandler);

module.exports = activRouter;
