const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para permitir la comunicación entre diferentes dominios/puertos
app.use(cors());
app.use(express.json());// para recibir json en las peticiones

// Importar la configuración de la base de datos y los modelos
const sequelize = require('./config/database');
const { Proyecto, Usuario, Plan_Pruebas, Defecto, Caso_Pruebas, UsuarioProyecto, index} = require('./models'); // Asegúrate de que tus modelos están exportados correctamente
require('dotenv').config(); // Cargar variables de entorno
require('./models/index');

// Importar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const casoPruebasRoutes = require('./routes/casoPruebasRoutes'); 
const defectoRoutes = require('./routes/defectoRoutes');
const planPruebasRoutes = require('./routes/planPruebasRoutes');
const proyectoRoutes = require('./routes/proyectoRoutes');
const codeRoutes = require('./routes/codeRoutes');
const usuarioProyectoRoutes = require('./routes/usuarioProyectoRoutes');

// Definir rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/caso-pruebas', casoPruebasRoutes);
app.use('/api/defectos', defectoRoutes);
app.use('/api/planes-pruebas', planPruebasRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/', codeRoutes);
app.use('/api', proyectoRoutes);
app.use('/usuario-proyecto', usuarioProyectoRoutes);


// Endpoint de prueba (puedes mantenerlo si lo deseas)
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

// ruta para la raiz
app.get('/', (req, res) => {
  res.send('Bienvenido al sistema de gestión');
});

// Sincronizar con la base de datos y luego iniciar el servidor
sequelize.sync()
  .then(() => {
    console.log('Base de datos conectada');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
