//* activityHandler.js

const { createActivity, getAllActivities, getActivityById } =
  require('../4controllers/activityController.js');

const getActivitiesHandler = async (req, res) => {
  //* Return Array with all the Activities
  //console.log('Handler getAllActivities.');
  try {
    const allActivs = await getAllActivities();
    res.status(200).json(allActivs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getActivityByIdHandler = async (req, res) => {
  //* One Activity detail, with all its Countries
  //console.log('Buscando Activity por Id.');
  let { id } = req.params;
  //id = Number(id);
  try {
      const aActiv = await getActivityById( id );
      res.status(200).json(aActiv);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  //* Create a new Activity
  //console.log('Handler Create Activity');
  const { name, description, difficulty,
    duration, season } = req.body;
  try {
    const newActiv = await createActivity(
      name, description, difficulty,
      duration, season);
    res.status(201).json(newActiv);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
};

module.exports = {
  createActivityHandler,
  getActivitiesHandler,
  getActivityByIdHandler
};