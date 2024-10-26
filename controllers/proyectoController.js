const { sequelize } = require('../models');
const { Proyecto } = require('../models');

// Crear un proyecto
exports.crearProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.create(req.body);
    res.status(201).json(proyecto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los proyectos
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.status(200).json(proyectos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un proyecto por ID
exports.obtenerProyectoPorId = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      res.status(200).json(proyecto);
    } else {
      res.status(404).json({ message: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un proyecto
exports.actualizarProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      await proyecto.update(req.body);
      res.status(200).json(proyecto);
    } else {
      res.status(404).json({ message: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un proyecto
exports.eliminarProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      await proyecto.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Proyecto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Obtener proyectos con usuarios usando SQL puro
exports.obtenerProyectosConUsuarios = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(`
      SELECT 
        Proyectos.id AS ProyectoID,
        Proyectos.nombre AS ProyectoNombre,
        Proyectos.descripcion AS ProyectoDescripcion,
        Proyectos.fecha_inicio AS ProyectoFechaInicio,
        Proyectos.fecha_fin AS ProyectoFechaFin,
        Proyectos.estado AS ProyectoEstado,
        Usuarios.id AS UsuarioID,
        Usuarios.nombre AS UsuarioNombre,
        Usuarios.email AS UsuarioEmail,
        Usuarios.rol AS UsuarioRol
      FROM 
        Proyectos
      JOIN 
        Usuario_Proyectos ON Proyectos.id = Usuario_Proyectos.proyecto_id
      JOIN 
        Usuarios ON Usuario_Proyectos.usuario_id = Usuarios.id;
    `);

    res.status(200).json(results);
  } catch (error) {
    console.error('Error al obtener proyectos con usuarios:', error);
    res.status(500).json({ error: 'Error al obtener proyectos con usuarios' });
  }
};
