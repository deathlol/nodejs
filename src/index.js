//Llamnado el módulo express
const express = require('express');
//Ejecutando el modulo -> Devuelve un objeto -> Usada para crear el servidor
// app es el servidor
const app = express();
// Sirve para las direcciones dependiendo de windows o linux
const path = require('path');

//SETINGS
//Creando una constante en express
app.set('port', 4000);
//Indicando donde se encuentra la carpeta views
app.set('views', path.join(__dirname, 'views'))
    //utilizando el motor de vista o plantillas
app.set('view engine', 'ejs');

//MIDDLEWARES -> funciones que se ejecutan antes de que las rutas procecen algo

//ROUTES -> Genera secciones
app.use(require('./routes/index'));

//STATIC FILES -> archivos que siempren se utilizaran
app.use(express.static(path.join(__dirname, 'public')));

//Para que el servidor empiece a ejecutarse en el puerto 3000 || imprime un mensaje del puerto
app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto: ", app.get('port'));
});