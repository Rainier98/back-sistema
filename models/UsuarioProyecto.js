const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const UsuarioProyecto = sequelize.define('UsuarioProyecto', {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'Usuarios',
      key: 'id'
    }
  },
  proyecto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'Proyectos',
      key: 'id'
    }
  }
}, {
  tableName: 'Usuario_Proyectos',
  timestamps: false
});

module.exports = UsuarioProyecto;
