const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'lab4grupal'
});

conexion.connect((error) => {
  if (error) {
    console.error('Error de conexión a la base de datos:', error);
    return;
  }
  console.log('Conexión establecida con la base de datos');
});

module.exports = conexion;