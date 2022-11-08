//objeto de conexión

const sequelize = require('../config/seq')

//datatypes
const { DataTypes, ValidationError } = require('sequelize')

//el modelo
const UserModel = require('../models/user')
const user = require('../models/user')

//crear el objeto usuario
const User = UserModel(sequelize, DataTypes)





//get:obtener detos Red
exports.traerUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(
            {
                "succes": true,
                "data": users
            }
        )
    } catch (error) {
        res.status(500)
            .json({
                "succes": false,
                "errors": "error de servidor"
            })
    }
}

//obtener recursos por get
exports.traerUserPorId = async (req, res) => {

    try {
        const userId = await User.findByPk(req.params.id)

        if (!userId) {
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "Usuario no existe"
                    ]
                }
            )
        } else {
            res.status(200).json(
                {
                    "succes": true,
                    "data": userId
                }
            )
        }
    } catch (error) {
        res.status(500)
            .json({
                "succes": false,
                "errors": "Error de servidor"
            })
    }


}

//POST: Crear un nuevo recurso
exports.crearUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(
            {
                "succes": true,
                "data": newUser
            }
        )
    } catch (error) {

        if (error instanceof ValidationError) {
            //Mensajes de eerores
            const errores = error.errors.map((e) => e.message)
            res.status(422)
                .json({
                    "succes": false,
                    "errors": errores
                })
        } else {
            res.status(500)
                .json({
                    "succes": false,
                    "errors": "error de servidor"
                })
        }
    }

}

//PUT
exports.actualizarUser = async (req, res) => {
    try {
        const upUser = await User.findByPk(req.params.id)
        if (!upUser) {
            //response de usuario no encontrado
            res.status(422).json(
                {
                    "succes": false,
                    "errors": [
                        "Usuario no existe"
                    ]
                }
            )
        } else {
            //actializar usuario por id
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const userAct = await User.findByPk(req.params.id)
            res.status(200).json(
                {
                    "succes": true,
                    "data": userAct
                }
            )
        }
    } catch (error) {
        res.status(500)
            .json({
                "succes": false,
                "errors": "error de servidor"
            })
    }

}


//DELETE borrar un user
exports.borrarUser = async (req, res) => {
    //buscar usuario por id
    const u = await User.findByPk(req.params.id)
    //borrar usuario por id
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(
        {
            "succes": true,
            "data": u
        }
    )
}