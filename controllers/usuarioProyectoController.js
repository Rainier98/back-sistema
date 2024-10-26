const { Usuario, Proyecto, UsuarioProyecto } = require('../models');

// Asociar usuario a proyecto
exports.asociarUsuarioProyecto = async (req, res) => {
  try {
    const { usuario_id, proyecto_id } = req.body;

    // Verificar si el usuario y el proyecto existen
    const usuario = await Usuario.findByPk(usuario_id);
    const proyecto = await Proyecto.findByPk(proyecto_id);

    if (!usuario || !proyecto) {
      return res.status(404).json({ message: 'Usuario o proyecto no encontrado' });
    }

    // Crear la asociación
    const nuevaAsociacion = await UsuarioProyecto.create({ usuario_id, proyecto_id });
    res.status(201).json(nuevaAsociacion);
  } catch (error) {
    console.error('Error al asociar usuario con proyecto:', error);
    res.status(500).json({ error: 'Error al asociar usuario con proyecto' });
  }
};

// Asociar usuario a proyecto
exports.asociarUsuarioProyecto = async (req, res) => {
    try {
      const { usuario_id, proyecto_id } = req.body;
  
      // Verificar si el usuario y el proyecto existen
      const usuario = await Usuario.findByPk(usuario_id);
      const proyecto = await Proyecto.findByPk(proyecto_id);
  
      if (!usuario || !proyecto) {
        return res.status(404).json({ message: 'Usuario o proyecto no encontrado' });
      }
  
      // Crear la asociación
      const nuevaAsociacion = await UsuarioProyecto.create({ usuario_id, proyecto_id });
      res.status(201).json(nuevaAsociacion);
    } catch (error) {
      console.error('Error al asociar usuario con proyecto:', error);
      res.status(500).json({ error: 'Error al asociar usuario con proyecto' });
    }
  };

// Obtener proyectos de un usuario
exports.obtenerProyectosPorUsuario = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const proyectos = await UsuarioProyecto.findAll({ where: { usuario_id } });
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
};

// Eliminar asociación usuario-proyecto
exports.eliminarAsociacion = async (req, res) => {
  try {
    const { usuario_id, proyecto_id } = req.body;
    await UsuarioProyecto.destroy({ where: { usuario_id, proyecto_id } });
    res.status(200).json({ message: 'Asociación eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la asociación' });
  }
};
