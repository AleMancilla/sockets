//archivo que arrancara mi servidor
//archivo principal de mi proyecto
//console.log('Hello world 2!');

const path =require('path'); // modulo de NodeJS para unir directorios
const express = require('express');
const app = express();

//setings
//configura el puerto , toma por defecto del sistema operativo o si no hay tomara el puerto 3000
app.set('port', process.env.PORT || 3000); 

//static files
//enviamos los archivos al navegador
//console.log(__dirname + '\public')
//console.log(path.join(__dirname, 'public'));//esto se encarga de window linux sin que nos preocupemos
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static())

//start server
app.listen(app.get('port'),() =>{
    console.log('server on port',app.get('port'))
});