const express = require('express')

const router = express.Router()

//get:obtener detos Red
router.get('/', (req, res) => {
    res.status(200).json(
        {
            "mesage": "aqui se va a mostrar todos los usuarios"
        }
    )
})


//obtener recursos por get
router.get('/:id', (req, res) => {
    res.status(200).json(
        {
            "mesage": `aqui  va a mostrarse el usuario cuyo id es ${req.params.id}`
        }
    )

})

//POST: Crear un nuevo recurso
router.post('/', (req, res) => {
    res.status(201).json(
        {
            "message": "aqui se va a crear el usuario"
        }
    )
})

//PUT
router.put('/:id', (req, res) => {
    res.status(200).json(
        {
            "message": `aqui se va a editar el usuario ${req.params.id}`
        }
    )
})

//DELETE
router.delete('/:id', (req, res) => {
    res.status(200).json(
        {
            "message": `aqui se va a eliminar el usuario ${req.params.id}`
        }
    )
})


module.exports = router