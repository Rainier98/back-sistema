const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Plan_Pruebas = require('./Plan_Pruebas');  // Asegúrate de tener este modelo para la relación

const Caso_Pruebas = sequelize.define('Caso_Pruebas', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('no iniciado', 'en progreso', 'completado'),
    allowNull: false,
    defaultValue: 'no iniciado',
  },
  resultado: {
    type: DataTypes.ENUM('éxito', 'fallo'),
    allowNull: true,
  },
  plan_prueba_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Plan_Pruebas,
      key: 'id'
    },
    allowNull: false
  }
}, {
  timestamps: false,
});

// Relacionar con Plan de Pruebas
Caso_Pruebas.belongsTo(Plan_Pruebas, { foreignKey: 'plan_prueba_id', onDelete: 'CASCADE' });

module.exports = Caso_Pruebas;
