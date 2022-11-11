//objeto de conexión

const sequelize = require('../config/seq')

//datatypes
const { DataTypes, ValidationError } = require('sequelize')

//el modelo
const CoursersModel = require('../models/coursers')
const coursers = require('../models/coursers')

//crear el objeto usuario
const Coursers = CoursersModel(sequelize, DataTypes)





//get:obtener detos Red
exports.traerCoursers = async (req, res) => {
    try {
        const Reviews = await Coursers.findAll();
        res.status(200).json(
            {
                "succes": true,
                "data": Reviews
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
exports.traerCoursersPorId = async (req, res) => {

    try {
        const ReviewId = await Coursers.findByPk(req.params.id)

        if (!ReviewId) {
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
                    "data": ReviewId
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
exports.crearCoursers = async (req, res) => {
    try {
        const newReview = await Coursers.create(req.body);
        res.status(201).json(
            {
                "succes": true,
                "data": newReview
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
exports.actualizarCoursers = async (req, res) => {
    try {
        const upReview = await Coursers.findByPk(req.params.id)
        if (!upReview) {
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
            await Coursers.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const ReviewAct = await Coursers.findByPk(req.params.id)
            res.status(200).json(
                {
                    "succes": true,
                    "data": ReviewAct
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


//DELETE borrar un Coursers
exports.borrarCoursers = async (req, res) => {
    try {
        const u = await Coursers.findByPk(req.params.id)
        if (!u) {
            //response de usuario no encontrado
            res.status(422)
                .json({
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]
                })
        } else {
            await Coursers.destroy({
                where: {
                    id: req.params.id
                }
            })
            //response
            res.status(200).json({
                "success": true,
                "data": u
            })
        }

    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servido"
        })
    }
}