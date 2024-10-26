const express = require('express');
const router = express.Router();
const defectoController = require('../controllers/defectoController');

// Rutas para Defectos
router.post('/', defectoController.crearDefecto);  // Crear un defecto
router.get('/', defectoController.obtenerDefectos);  // Obtener todos los defectos
router.get('/:id', defectoController.obtenerDefectoPorId);  // Obtener un defecto por ID
router.put('/:id', defectoController.actualizarDefecto);  // Actualizar un defecto
router.delete('/:id', defectoController.eliminarDefecto);  // Eliminar un defecto

module.exports = router;
