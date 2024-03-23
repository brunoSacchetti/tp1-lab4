const conexion = require('../database/database.js');



function altaEmpresa() {


  const datosEmpresa = {
    denominacion: formulario.denominacion.value,
    telefono: formulario.telefono.value,
    horarioAtencion: formulario.horario.value,
    quienesSomos: formulario.quienesSomos.value,
    latitud: parseFloat(formulario.latitud.value),
    longitud: parseFloat(formulario.longitud.value),
    domicilio: formulario.domicilio.value,
    email: formulario.email.value
  };

  // Realizar la consulta a la base de datos dentro de la función altaEmpresa()
  conexion.query('INSERT INTO empresa SET ?', datosEmpresa, (error, resultados) => {
    if (error) {
      console.error('Error al insertar datos:', error);
      return;
    }
    console.log('Datos insertados correctamente');

    // Terminar la conexión con la base de datos después de realizar la consulta
    conexion.end();
  });
}