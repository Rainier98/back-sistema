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
    tableName: 'Usuario_Proyectos', // Aquí especificamos el nombre exacto de la tabla
    timestamps: false // Si no usas createdAt/updatedAt, desactiva timestamps
  });
  
  module.exports = UsuarioProyecto;
  