const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'usuario_mysql',
    password: 'contraseña_mysql',
    database: 'nombre_base_datos'
});

conexion.connect();

const datosEmpresa = {
    denominacion: 'Nombre de la Empresa',
    telefono: '123456789',
    horarioAtencion: '9:00 - 18:00',
    quienesSomos: 'Somos una empresa dedicada a...',
    latitud: 123.456,
    longitud: 789.123,
    domicilio: 'Calle Principal 123',
    email: 'correo@empresa.com'
};

conexion.query('INSERT INTO empresa SET ?', datosEmpresa, (error, resultados) => {
    if (error) {
        console.error('Error al insertar datos:', error);
        return;
    }
    console.log('Datos insertados correctamente');
});

conexion.end();