const express = require('express')
const {crearCoursers, 
    traerCoursersPorId, 
    traerCoursers, 
    borrarCoursers, 
    actualizarCoursers} = require ('../controllers/CoursersController')
const router = express.Router()


//rutas de usuario

router.route('/')
      .get(traerCoursers)
      .post(crearCoursers)

router.route('/:id')
      .get(traerCoursersPorId)
      .put(actualizarCoursers)
      .delete(borrarCoursers)



module.exports = router