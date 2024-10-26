const express = require('express');
const router = express.Router();
const planPruebasController = require('../controllers/planPruebasController');

// Rutas para Planes de Pruebas
router.post('/', planPruebasController.crearPlanPruebas);  // Crear un plan de pruebas
router.get('/', planPruebasController.obtenerPlanesPruebas);  // Obtener todos los planes de pruebas
router.get('/:id', planPruebasController.obtenerPlanPorId);  // Obtener un plan de pruebas por ID
router.put('/:id', planPruebasController.actualizarPlan);  // Actualizar un plan de pruebas
router.delete('/:id', planPruebasController.eliminarPlan);  // Eliminar un plan de pruebas

module.exports = router;
