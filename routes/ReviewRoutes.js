const express = require('express')
const {crearReview, 
    traerReviewPorId, 
    traerReview, 
    borrarReview, 
    actualizarReview} = require ('../controllers/ReviewController')
const router = express.Router()


//rutas de usuario

router.route('/')
      .get(traerReview)
      .post(crearReview)

router.route('/:id')
      .get(traerReviewPorId)
      .put(actualizarReview)
      .delete(borrarReview)



module.exports = router