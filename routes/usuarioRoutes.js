const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para crear un usuario
router.post('/', usuarioController.crearUsuario);

// Ruta para obtener todos los usuarios
router.get('/', usuarioController.obtenerUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/usuarios/:id', usuarioController.obtenerUsuarioPorId);

// Ruta para actualizar un usuario por su ID
router.put('/usuarios/:id', usuarioController.actualizarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', usuarioController.eliminarUsuario);


module.exports = router;
