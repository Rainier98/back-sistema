const Sequelize = require('sequelize');
require('dotenv').config(); // Para cargar las variables de entorno desde el .env
const cors = require('cors');

// Crear la conexión usando Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  define: {
    timestamps: false // Opcional, desactiva los timestamps si no los necesitas
  },
  dialectOptions: {
    connectTimeout: 60000, // 60 segundos de tiempo de espera para la conexión
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Verificar si la conexión es exitosa
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = sequelize;
