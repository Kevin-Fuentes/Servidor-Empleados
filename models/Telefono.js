const { Model, DataTypes } = require("sequelize");

const sequelize = require("../db/db");

class Telefonos extends Model {}

Telefonos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notNull: {
          msg: "El campo no puede ser nulo",
        },
        isAlpha: {
          args: true,
          msg: "El tipo solo puede contener letras",
        },
        isIn: [["cell", "tel"]],
      },
    },

    numero: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notNull: {
          msg: "El campo no puede ser nulo",
        },
        len: {
          args: [7, 30],
          msg: "El telefono tiene que ser entre 7 y 30",
        },
      },
    },
    indicativo: {
      type: DataTypes.STRING,

      validate: {
      
        len: {
          args: [1, 20],
          msg: "El indicativo tiene que ser entre 3 y 20",
        },
      },
    },
  
  },
  { sequelize, modelName: "telefono" }
);

module.exports = Telefonos;
