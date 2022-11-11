'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'title solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'title no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'title no debe ser nulo'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len:  {
          args: [2,20],
          msg: 'description solo puede tener como maximo 20 caracteres y como minimo 1'
        },
        notEmpty: {
          args: true,
          msg: 'description no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'description no debe ser nulo'
        }
      }
    },
    weeks: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isInt: {
          args: true,
          msg: 'weeks solo debe tener numeros enteros'
        },
        notEmpty: {
          args: true,
          msg: 'weeks no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'weeks no debe ser nulo'
        }
      }
    },
    enroll_cost:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args: true,
          msg: 'weeks solo debe tener numeros'
        },
        notEmpty: {
          args: true,
          msg: 'weeks no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'weeks no debe ser nulo'
        }
      }
    },
    minimum_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: ' minimum_skill solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'minimum_skill no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'minimum_skill no debe ser nulo'
        }
      }
    },
    bootcamp_id:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: false
  });
  return Courses;
};