//objeto de conexión

const sequelize = require('../config/seq')

//datatypes
const { DataTypes } = require('sequelize')

//el modelo
const UserModel = require('../models/user')

//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)





//get:obtener detos Red
exports.traerUsers = async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(
        {
            "succes": true,
            "data": users
        }
    )
}

//obtener recursos por get
exports.traerUserPorId = async (req, res) => {
    const userId = await User.findByPk(req.params.id)
    res.status(200).json(
        {
            "succes": true,
            "data": userId
        }
    )

}

//POST: Crear un nuevo recurso
exports.crearUser = async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json(
        {
            "succes": true,
            "data": newUser
        }
    )
}

//PUT
exports.actualizarUser = async (req, res) => {
    //actializar usuario por id
    await User.update(req.body,{
        where: {
            id: req.params.id
        }
    });

    //consultar datos actualizados
    const upUser =await User.findByPk(req.params.id)

    res.status(200).json(
        {
            "succes": true,
            "data": upUser
        }
    )
}


//DELETE
exports.borrarUser = (req, res) => {
    res.status(200).json(
        {
            "message": `aqui se va a eliminar el usuario ${req.params.id}`
        }
    )
}