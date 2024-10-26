// routes/casoPruebaRoutes.js
const express = require('express');
const router = express.Router();
const casoPruebasController = require('../controllers/casoPruebasController');

router.post('/', casoPruebasController.crearCasoPrueba);
router.get('/', casoPruebasController.obtenerCasosPruebas);
router.get('/:id', casoPruebasController.obtenerCasoPorId);
router.put('/:id', casoPruebasController.actualizarCasoPrueba);
router.delete('/:id', casoPruebasController.eliminarCasoPrueba);

module.exports = router;
