const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: ['https://back-sistema-giarga9yc-rainier-garcias-projects.vercel.app/'], // Reemplaza con la URL de tu proyecto en Vercel
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

if (!sequelize) {
  console.error('No se pudo conectar a la base de datos. Asegúrate de que los parámetros de conexión sean correctos.');
  process.exit(1);
}

const { Proyecto, Usuario, Plan_Pruebas, Defecto, Caso_Pruebas, UsuarioProyecto, index } = require('./models');

const usuarioRoutes = require('./routes/usuarioRoutes');
const casoPruebasRoutes = require('./routes/casoPruebasRoutes');
const defectoRoutes = require('./routes/defectoRoutes');
const planPruebasRoutes = require('./routes/planPruebasRoutes');
const proyectoRoutes = require('./routes/proyectoRoutes');
const codeRoutes = require('./routes/codeRoutes');
const usuarioProyectoRoutes = require('./routes/usuarioProyectoRoutes');

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/caso-pruebas', casoPruebasRoutes);
app.use('/api/defectos', defectoRoutes);
app.use('/api/planes-pruebas', planPruebasRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/', codeRoutes);
app.use('/usuario-proyecto', usuarioProyectoRoutes);

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema de gestión');
});

sequelize.authenticate()
  .then(() => {
    console.log('Base de datos conectada exitosamente');
    const PORT = process.env.PORT || 8080; // Asegúrate de que está escuchando en el puerto 8080
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
    process.exit(1);
  });

module.exports = app;
