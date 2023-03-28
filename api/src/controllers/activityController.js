const { Activity} = require("../db.js");

const createActivity = async (name,
    description, difficulty,
    duration, season) =>
    await Activity.create({
        name: name,
        description: description,
        difficulty: difficulty,
        duration: duration,
        season: season
    });

const getAllActivities = async () => {
    const DBActivities = await Activity.findAll();
    return DBActivities;
};
    

module.exports = { createActivity, getAllActivities };
