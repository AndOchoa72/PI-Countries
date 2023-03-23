//* activityHandler.js

const getActivities = (req, res) => {

    //* Devuelvo un Array con todas las Actividades

    res.status(200).send('NIY: Doy todas las Activities');

};

const createActivity = (req, res) => {

    //* Recibo todos los datos necesarios para crear una nueva Activity
    console.log(req.body);
    const { data } = req.body;
    res.status(200).send(`Posteo una nueva Activity:
    data: ${data}`);

};

module.exports = {
    getActivities,
    createActivity
};