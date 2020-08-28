const { Model, DataTypes } = require("sequelize");

const sequelize = require("../db/db");

class Empleados extends Model {}

Empleados.init(
  {
       
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },


    nombres: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notNull: {
          msg: "El campo no puede ser nulo",
        },
        len: {
          args: [3, 240],
          msg: "El nombre tiene que ser entre 3 y 245",
        },

      },
    },

    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notNull: {
          msg: "El campo no puede ser nulo",
        },
        len: {
          args: [3, 240],
          msg: "El nombre tiene que ser entre 3 y 245",
        },

      },
    },
    tipoIdentificacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Tipo de identificación obligatoria",
        }, isAlpha: {
          args: true,
          msg: "la identificación solo puede contener numeros",
        },
          isIn: {
          args: [['nit', 'cc']],
          msg: 'Tipos validos nit y cc',
        },
      },
    },
    identificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
        
      validate: {
         isAlphanumeric: {
          args: true,
          msg: "tu identificacion solo puede contener numeros",
        },
        notNull: {
          args: true,
          msg: "identificación obligatoria",
        }
       
      },
    },
    
    correo: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Ingrese un correo valido",
        },
      },
    },

    
    salarioMensual: {
      type: DataTypes.STRING,
      allowNull: false,
     
        
      validate: {
       
        notNull: {
          args: true,
          msg: "Salario obligatoria",
        }
       
      },
    },

  


  },

  { sequelize, modelName: "empleado" }
);

module.exports = Empleados;
