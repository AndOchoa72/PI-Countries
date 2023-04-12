require('dotenv').config();
const { Sequelize } = require('sequelize');
const CountryMdl = require('./1models/countryModel.js');
const ActivityMdl = require('./1models/activityModel.js');
const CountActivMdl = require('./1models/countactivModel.js');

//const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  dialect: 'postgres',
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

CountryMdl(sequelize);
ActivityMdl(sequelize);
CountActivMdl(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Country, Activity, CountActiv }  = sequelize.models;

// Aca vendrian las relaciones
Country.belongsToMany(Activity, { through: 'CountActiv' });
Activity.belongsToMany(Country, { through: 'CountActiv' });
// The Super Many-to-Many relationship
Country.hasMany(CountActiv);
CountActiv.belongsTo(Country);
Activity.hasMany(CountActiv);
CountActiv.belongsTo(Activity);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
