const express = require('express');
const router = express.Router();
const usuarioProyectoController = require('../controllers/usuarioProyectoController');

// Rutas para asociar usuario a proyecto
router.post('/asociar', usuarioProyectoController.asociarUsuarioProyecto);

// Rutas para obtener proyectos de un usuario
router.get('/proyectos/:usuario_id', usuarioProyectoController.obtenerProyectosPorUsuario);

// Rutas para eliminar asociación usuario-proyecto
router.delete('/eliminar', usuarioProyectoController.eliminarAsociacion);

module.exports = router;
