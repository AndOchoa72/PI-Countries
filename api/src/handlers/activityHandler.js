//* activityHandler.js

const { createActivity, getAllActivities } =
  require('../controllers/activityController.js');

const getActivitiesHandler = async (req, res) => {
  //* Return Array with all the Activities
  try {
    const allActivs = await getAllActivities();
    res.status(200).json(allActivs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  //* Create a new Activity
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
  getActivitiesHandler,
  createActivityHandler
};