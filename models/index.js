const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Proyecto = require('./Proyecto');
const UsuarioProyecto = require('./UsuarioProyecto');
const Plan_Pruebas = require('./Plan_Pruebas');
const Defecto = require('./Defecto');
const Caso_Pruebas = require('./Caso_Pruebas');


// Relacionar modelos si es necesario
Usuario.belongsToMany(Proyecto, { through: UsuarioProyecto, foreignKey: 'usuario_id' });
Proyecto.belongsToMany(Usuario, { through: UsuarioProyecto, foreignKey: 'proyecto_id' });
// Ejemplo: Usuario.hasMany(Proyecto);

module.exports = {
  Usuario,
  Proyecto,
  UsuarioProyecto,
  Plan_Pruebas,
  Defecto,
  Caso_Pruebas,
  sequelize,
};
