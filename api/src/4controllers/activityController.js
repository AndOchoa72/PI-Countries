const { Country, Activity} = require("../db.js");

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

const getActivityById = async ( myId ) => {
  //console.log(`Buscando la Activity: ${myId}`);
  const aActiv = await Activity.findByPk(
    myId, {
      include: {
        model: Country // Clase 3, 1h39m
      }
    });
  return aActiv;        
};

module.exports = {
  createActivity,
  getActivityById,
  getAllActivities };
