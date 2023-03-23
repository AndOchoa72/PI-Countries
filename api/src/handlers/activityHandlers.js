//* activityHandler.js

const getActivities = (req, res) => {

    //* Return Array with all the Activities

    res.status(200).send('NIY: list all Activities');

};

const createActivity = (req, res) => {

    //* Create a new Activity
    console.log(req.body);
    const { data } = req.body;
    res.status(200).send(`Post a new Activity:
    data: ${data}`);

};

module.exports = {
    getActivities,
    createActivity
};