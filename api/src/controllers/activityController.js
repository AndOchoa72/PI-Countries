const { Activity} = require("../db.js");

const createActivity = async (name,
  description, difficulty,
  duration, season) => {
  return await Activity.create({
    name, description,
    difficulty, duration, season }
)};

const getAllActivities = async () => {
  return await Activity.findAll();
};

module.exports = { createActivity, getAllActivities };
