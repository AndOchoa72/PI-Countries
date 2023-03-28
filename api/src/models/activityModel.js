const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defining the models
  
  const TSeason = DataTypes.ENUM(
    "Verano",
    "Otoño",
    "Invierno",
    "Primavera"
    );

  sequelize.define('Activity', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    season: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'activities',
    timestamps: false
  });
};
