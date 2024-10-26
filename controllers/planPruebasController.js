const { Plan_Pruebas } = require('../models');

// Crear un plan de pruebas
exports.crearPlanPruebas = async (req, res) => {
  try {
    const planPruebas = await Plan_Pruebas.create(req.body);
    res.status(201).json(planPruebas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los planes de pruebas
exports.obtenerPlanesPruebas = async (req, res) => {
  try {
    const planes = await Plan_Pruebas.findAll();
    res.status(200).json(planes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un plan de pruebas por ID
exports.obtenerPlanPorId = async (req, res) => {
  try {
    const planPruebas = await Plan_Pruebas.findByPk(req.params.id);
    if (planPruebas) {
      res.status(200).json(planPruebas);
    } else {
      res.status(404).json({ message: 'Plan de pruebas no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un plan de pruebas
exports.actualizarPlan = async (req, res) => {
  try {
    const planPruebas = await Plan_Pruebas.findByPk(req.params.id);
    if (planPruebas) {
      await planPruebas.update(req.body);
      res.status(200).json(planPruebas);
    } else {
      res.status(404).json({ message: 'Plan de pruebas no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un plan de pruebas
exports.eliminarPlan = async (req, res) => {
  try {
    const planPruebas = await Plan_Pruebas.findByPk(req.params.id);
    if (planPruebas) {
      await planPruebas.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Plan de pruebas no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
