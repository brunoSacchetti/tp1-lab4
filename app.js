const express = require('express'); /* <- ruteo backend */
const conexion = require('./database/database.js'); 

const app = express();

// Consulta de usuarios
app.get("/", (req, res) => {
  res.json("funciona")
})


// Otros endpoints para alta, baja, modificación, etc.

const puerto = 3300; // Puerto en el que se ejecutará el servidor
app.listen(puerto, () => {
  console.log(`Servidor en ejecución en http://localhost:${puerto}`);
});