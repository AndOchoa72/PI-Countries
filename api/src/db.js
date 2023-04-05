require('dotenv').config();
const { Sequelize } = require('sequelize');
const CountryMdl = require('./1models/countryModel.js');
const ActivityMdl = require('./1models/activityModel.js');
const CountActivMdl = require('./1models/countactivModel.js');

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  dialect: 'postgres',
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

//* * 
const basename = path.basename(__filename);

const modelDefiners = [];

CountryMdl(sequelize);
ActivityMdl(sequelize);
CountActivMdl(sequelize);

//console.log(sequelize.models);

/*
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
/ */

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Country, Activity, CountActiv }  = sequelize.models;

// Aca vendrian las relaciones

Country.belongsToMany(Activity, { through: 'CountActiv' });
Activity.belongsToMany(Country, { through: 'CountActiv' });
Country.hasMany(CountActiv);
CountActiv.belongsTo(Country);
Activity.hasMany(CountActiv);
CountActiv.belongsTo(Activity);
// Product.hasMany(Reviews);

/*
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
const User_Profile = sequelize.define('User_Profile', {}, { timestamps: false });
User.belongsToMany(Profile, { through: User_Profile });
Profile.belongsToMany(User, { through: User_Profile });
// The Super Many-to-Many relationship
User.belongsToMany(Profile, { through: Grant });
Profile.belongsToMany(User, { through: Grant });
User.hasMany(Grant);
Grant.belongsTo(User);
Profile.hasMany(Grant);
Grant.belongsTo(Profile);
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
const Country_Activity = sequelize.define('Country_Activity', {}, { timestamps: false });
Country.belongsToMany(Activity, { through: Country_Activity });
Activity.belongsToMany(Country, { through: Country_Activity });
// The Super Many-to-Many relationship
Country.belongsToMany(Activity, { through: Country_Activity });
Activity.belongsToMany(Country, { through: Country_Activity });
Country.hasMany(Country_Activity);
Country_Activity.belongsTo(Country);
Activity.hasMany(Country_Activity);
Country_Activity.belongsTo(Activity);
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
*/

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
