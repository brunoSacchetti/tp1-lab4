const conexion = require('../database/database') 

function altaNoticia(event) {
    const formulario = document.getElementById('formularioEmpresa')
        event.preventDefault(); // Evitar el envío del formulario por defecto
    
        // Obtener los valores de los campos del formulario
        const titulo = formulario.querySelector('#titulo').value;
        const contenido = formulario.querySelector('#contenido').value;
        const imagen = formulario.querySelector('#imagen').value;

    // Crear el objeto datosEmpresa con los valores del formulario
    const datosNoticia = {
        titulo: titulo,
        contenido: contenido,
        imagen: imagen
    };

     // Conectar a la base de datos
     conexion.connect();

     // Definir la consulta de inserción
     const consulta = 'INSERT INTO noticia SET ?';
 
     // Ejecutar la consulta de inserción
     conexion.query(consulta, datosNoticia, (error, resultados) => {
         if (error) {
             console.error('Error al insertar datos:', error);
             return;
         }
         console.log('Datos insertados correctamente');
         
         // Cerrar la conexión a la base de datos después de ejecutar la consulta
         conexion.end();
     });
    
}
