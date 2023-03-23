//* countryHandler.js

const getCountries = (req, res) =>{

    let myName = req.query.name;
    if (myName !== undefined) {

        //* Filters by Name
        //* Ignores Case
        //* If no matches, then Message

        console.log(`Name=${myName}`);
        res.status(200).send(
            `NIY: List Countries by Name: `
            + myName);

        } else {

        //* Return Array with all the Countries

        res.status(200).send('NIY: List all Countries');

        };
};

const getCountryById = (req, res) => {
    //* One Country detail, with all its Activities

    let { id } = req.params;
    res.status(200).send('NIY: Detail one Country and its Activities: ' + id);
};

module.exports = {
    getCountries,
    getCountryById
};
