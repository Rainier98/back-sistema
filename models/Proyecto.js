const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Proyecto = sequelize.define('Proyectos', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
  },
  fecha_fin: {
    type: DataTypes.DATE,
  },
  estado: {
    type: DataTypes.ENUM('activo', 'finalizado', 'en espera'),
    defaultValue: 'activo',
  }
  }, {
    sequelize,
    modelName: 'proyecto'
  });


module.exports = Proyecto;
