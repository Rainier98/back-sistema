const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

// Rutas para Proyectos
router.post('/', proyectoController.crearProyecto);  // Crear un proyecto
router.get('/', proyectoController.obtenerProyectos);  // Obtener todos los proyectos
router.get('/:id', proyectoController.obtenerProyectoPorId);  // Obtener proyecto por ID
router.put('/:id', proyectoController.actualizarProyecto);  // Actualizar un proyecto
router.delete('/:id', proyectoController.eliminarProyecto);  // Eliminar un proyecto
router.get('/con-usuarios', proyectoController.obtenerProyectosConUsuarios);

module.exports = router;



