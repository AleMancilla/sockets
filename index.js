//archivo que arrancara mi servidor
//archivo principal de mi proyecto
//console.log('Hello world 2!');

const express = require('express');
const app = express();

//setings
//configura el puerto , toma por defecto del sistema operativo o si no hay tomara el puerto 3000
app.set('port', process.env.PORT || 3000); 

//start server
app.listen(app.get('port'),() =>{
    console.log('server on port',app.get('port'))
});