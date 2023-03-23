const { Router } = require('express');
const { getActivities,
        createActivity
    } = require('../handlers/activityHandlers.js');

const activRouter = Router();

activRouter.get("/", getActivities);

activRouter.post("/", createActivity);

module.exports = activRouter;
