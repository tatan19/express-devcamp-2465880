const express = require('express')
const {crearUser, 
    traerUserPorId, 
    traerUsers, 
    borrarUser, 
    actualizarUser} = require ('../controllers/UserController')
const router = express.Router()


//rutas de usuario

router.route('/')
      .get(traerUsers)
      .post(crearUser)

router.route('/:id')
      .get(traerUserPorId)
      .put(actualizarUser)
      .delete(borrarUser)



module.exports = router