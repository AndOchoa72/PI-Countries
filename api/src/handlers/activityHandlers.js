//* activityHandler.js
const { createActivity } = require('../controllers/activityController.js');

const getActivitiesHandler = (req, res) => {

    //* Return Array with all the Activities

    res.status(200).send('NIY: list all Activities');

};

const createActivityHandler = async (req, res) => {
    //* Create a new Activity
    try { 
        console.log(req.body);
        const { name, description, difficulty,
            duration, season } = req.body;
    //    res.status(200).send(`Post a new Activity:
    //    name: ${name}`);
        const newActiv = await createActivity(
            name, description, difficulty,
            duration, season );
        res.status(201).json(newActiv);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    getActivitiesHandler,
    createActivityHandler
};