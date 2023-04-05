const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defining the models

  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      validate: {isAlpha: true}
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {isUrl: true}
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: 'None Assigned'
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: 'None Assigned'
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'countries',
    timestamps: false
  });
};
