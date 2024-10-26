const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proyecto = require('./Proyecto'); // Asegúrate de tener este modelo para la relación

const Plan_Pruebas = sequelize.define('Plan_Pruebas', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  timestamps: false, // Agrega createdAt y updatedAt
});

// Relacionar con Proyecto
Plan_Pruebas.belongsTo(Proyecto, { foreignKey: 'proyecto_id', onDelete: 'CASCADE' });

module.exports = Plan_Pruebas;
