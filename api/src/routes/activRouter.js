const { Router } = require('express');
const { getActivities,
        createActivity
    } = require('../handlers/activityHandlers.js');

const activRouter = Router();

//* List all Activities
activRouter.get("/", getActivities);

//* Create new Activity
activRouter.post("/", createActivity);

module.exports = activRouter;
