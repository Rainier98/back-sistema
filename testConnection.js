const mysql = require('mysql2/promise');
require('dotenv').config();

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306 // por si tienes el puerto en otra variable
    });
    console.log('Conexión a la base de datos exitosa');
    const [rows, fields] = await connection.execute('SELECT 1 + 1 AS solution');
    console.log('Resultado de la consulta:', rows);
    await connection.end();
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
})();
