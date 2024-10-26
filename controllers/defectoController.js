const { Defecto } = require('../models');

// Crear un defecto
exports.crearDefecto = async (req, res) => {
  try {
    const defecto = await Defecto.create(req.body);
    res.status(201).json(defecto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los defectos
exports.obtenerDefectos = async (req, res) => {
  try {
    const defectos = await Defecto.findAll();
    console.log('Defectos obtenidos:', defectos); // Log para verificar los datos obtenidos
    res.status(200).json(defectos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Obtener un defecto por ID
exports.obtenerDefectoPorId = async (req, res) => {
  try {
    const defecto = await Defecto.findByPk(req.params.id);
    if (defecto) {
      res.status(200).json(defecto);
    } else {
      res.status(404).json({ message: 'Defecto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un defecto
exports.actualizarDefecto = async (req, res) => {
  try {
    const defecto = await Defecto.findByPk(req.params.id);
    if (defecto) {
      await defecto.update(req.body);
      res.status(200).json(defecto);
    } else {
      res.status(404).json({ message: 'Defecto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un defecto
exports.eliminarDefecto = async (req, res) => {
  try {
    const defecto = await Defecto.findByPk(req.params.id);
    if (defecto) {
      await defecto.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Defecto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

