const express = require('express'); /* <- ruteo backend */
const conexion = require('./database/database.js');

const app = express();

/* SISTEMA DE RUTEOS */
app.get("/", (req, res) => {
  res.json("funciona") /* CREAR UN HOME */
})

/* ESTO ES PARA CARGAR VISTAS */
app.get("/empresas", (req, res) => {
  res.sendFile(__dirname + "/administrarEmpresa.html")
})

app.get("/noticias", (req, res) => {
  res.sendFile(__dirname + "/administrarNoticia.html")
})

const puerto = 3300;
app.listen(puerto, () => {
  console.log(`Servidor en ejecución en http://localhost:${puerto}`);
});