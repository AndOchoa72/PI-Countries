const { Router } = require('express');
const {
  createActivityHandler,
  getActivitiesHandler,
  getActivityByIdHandler } =
  require('../3handlers/activityHandler.js');

const {
  valActCreate } =
  require('../5middlewares/activMidlWr.js');

const activRouter = Router();

//console.log('Router Activities...');

//* Create new Activity
activRouter.post("/", valActCreate, createActivityHandler);

//* List all Activities
activRouter.get("/", getActivitiesHandler);

//* One Activity detail, with all its Countries
activRouter.get("/:id", getActivityByIdHandler);

module.exports = activRouter;
