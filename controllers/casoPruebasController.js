// controllers/casoPruebaController.js
const { Caso_Pruebas } = require('../models');

exports.crearCasoPrueba = async (req, res) => {
  try {
    const casoPrueba = await Caso_Pruebas.create(req.body);
    res.status(201).json(casoPrueba);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerCasosPruebas = async (req, res) => {
  try {
    const casos = await Caso_Pruebas.findAll();
    res.status(200).json(casos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerCasoPorId = async (req, res) => {
  try {
    const casoPrueba = await Caso_Pruebas.findByPk(req.params.id);
    if (casoPrueba) {
      res.status(200).json(casoPrueba);
    } else {
      res.status(404).json({ message: 'Caso de prueba no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.actualizarCasoPrueba = async (req, res) => {
  try {
    const casoPrueba = await Caso_Pruebas.findByPk(req.params.id);
    if (casoPrueba) {
      await casoPrueba.update(req.body);
      res.status(200).json(casoPrueba);
    } else {
      res.status(404).json({ message: 'Caso de prueba no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarCasoPrueba = async (req, res) => {
  try {
    const casoPrueba = await Caso_Pruebas.findByPk(req.params.id);
    if (casoPrueba) {
      await casoPrueba.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Caso de prueba no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
