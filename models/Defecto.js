const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Caso_Pruebas = require('./Caso_Pruebas');
const Usuario = require('./Usuario');


const Defecto = sequelize.define('Defecto', {
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('abierto', 'en progreso', 'cerrado'),
    allowNull: false,
    defaultValue: 'abierto',
  },
  severidad: {
    type: DataTypes.ENUM('baja', 'media', 'alta'),
    allowNull: false,
  },
  prioridad: {
    type: DataTypes.ENUM('baja', 'media', 'alta'),
    allowNull: false,
  },
  caso_prueba_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Caso_Pruebas,
      key: 'id',
    },
  },
  desarrollador_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
    as: 'desarrollador',
  },
}, {
  timestamps: false,
});

Defecto.belongsTo(Caso_Pruebas, { foreignKey: 'caso_prueba_id', onDelete: 'CASCADE' });
Defecto.belongsTo(Usuario, { foreignKey: 'desarrollador_id', as: 'desarrollador', onDelete: 'SET NULL' });

module.exports = Defecto;
