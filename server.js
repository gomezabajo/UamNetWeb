//Usamos Express, una libreria que simplifica el hacer un servidor web
var express = require('express');
var app = express();
//Por defecto, redirigimos las peticiones al archivo con el mismo nombre de la carpeta static_content
app.use(express.static(__dirname + '/static_content'));
//Iniciamos el servidor en el puerto que provee Azure, u 8080 si estamos probando en local
app.listen(process.env.PORT || 8080);