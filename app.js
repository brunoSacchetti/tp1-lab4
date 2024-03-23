const express = require('express'); /* <- ruteo backend */ 
const conexion = require('./database/database.js');
const path = require("path");

const app = express();
app.use(express.urlencoded({
  extended: false
})); //Esto es para formData
app.use(express.json())
//path


app.set('view engine', 'ejs');

// Configurar la carpeta de vistas
app.set('views', path.join(__dirname, '/views'));

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'controller')));

/* SISTEMA DE RUTEOS */
app.get("/", (req, res) => {
  res.json("funciona") /* CREAR UN HOME */
})

/* ESTO ES PARA CARGAR VISTAS */
app.get("/empresas", (req, res) => {
  res.render("administrarEmpresa.ejs");
});

app.get("/noticias", (req, res) => {
  res.render("administrarNoticia.ejs")
})


const puerto = 3300;
app.listen(puerto, () => {
  console.log(`Servidor en ejecución en http://localhost:${puerto}`);
});