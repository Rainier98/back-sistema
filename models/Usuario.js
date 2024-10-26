const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuarios', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  rol: {
    type: DataTypes.ENUM('administrador', 'tester', 'desarrollador'),
    allowNull: false,
  }
}, {
  timestamps: false,
},
{
  sequelize,
  modelName: 'usuario'
});

module.exports = Usuario;



