//* countryHandler.js

const getCountries = (req, res) =>{

    let myName = req.query.name;
    if (myName !== undefined) {

        //* Filtra segun Name
        //* Ignora Case
        //* Si no hay, Mensaje adecuado

        console.log(`Name=${myName}`);
        res.status(200).send(
            `NIY: Doy Countries segun Name: `
            + myName);

        } else {

        //* Devuelvo Array con todos los Countries

        res.status(200).send('NIY: Doy todos los Countries');

        };
};

const getCountryById = (req, res) => {
    //* Detalle de un solo Pais, con sus Activities

    let idPais = req.params.idPais;
    res.status(200).send('NIY: Doy un Country y sus Activities: ' + idPais);
};

module.exports = {
    getCountries,
    getCountryById
};
