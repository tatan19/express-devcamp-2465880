'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Title solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'Title no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'Title No debe ser nulo'
        }
      }
    },
    text: {
      type: DataTypes.STRING, allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Text solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'Text no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'Text No debe ser nulo'
        }
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      unique: true,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Rating solo debe tener numeros'
        }
      }
    },
    bootcamp_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false
  });
  return Reviews;
};