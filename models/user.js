'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Name solo debe tener letras'
        },
        notEmpty: {
          args: true,
          msg: 'Name no debe quedar vacio'
        },
        notNull: {
          args: true,
          msg: 'No debe ser nulo'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name no debe quedar vacio'
        },
        notNull: true,
        isEmail: {
          args: true,
          msg: "email debe ser valido"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 10],
          msg: "Password entre 5 y 10 caracteres"
        },
        notEmpty: {
          args: true,
          msg: 'password no debe estar vacia'
        },
        notNull: {
          args: true,
          msg: 'Password no debe ser nula'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};