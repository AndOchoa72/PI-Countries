const { Router } = require('express');
const { getActivitiesHandler,
        createActivityHandler
    } = require('../handlers/activityHandlers.js');

const activRouter = Router();

//* List all Activities
activRouter.get("/", getActivitiesHandler);

//* Create new Activity
activRouter.post("/", createActivityHandler);

module.exports = activRouter;
