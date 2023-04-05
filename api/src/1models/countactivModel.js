const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defining the models

  sequelize.define('CountActiv', {
    CountryId: {
      type: DataTypes.STRING(3),
      references: {
        model: 'Country',
        key: 'id'
      }
    },
    ActivityId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Activity',
        key: 'id'
      }
    }
  }, {
    tableName: 'countactiv',
    timestamps: false
  });
};
