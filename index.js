//archivo que arrancara mi servidor
//archivo principal de mi proyecto
//console.log('Hello world 2!');

const path =require('path'); // modulo de NodeJS para unir directorios
const express = require('express');
const app = express();

////#####setings
//configura el puerto , toma por defecto del sistema operativo o si no hay tomara el puerto 3000
app.set('port', process.env.PORT || 3000); 

////#####static files
//enviamos los archivos al navegador
//console.log(__dirname + '\public')
//console.log(path.join(__dirname, 'public'));//esto se encarga de window linux sin que nos preocupemos
app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static())

////#####start server
const server = app.listen(app.get('port'),() =>{
    console.log('server on port',app.get('port'))
});

//###################################333

const SocketIO = require('socket.io');//configra comunicacion
//le damos un servidor para usar la comunicacion bidireccional
//SocketIO.listen(server);//ya tenemos configurado
const io = SocketIO(server);//mantiene la coneccion

//#####websockets
io.on('connection',(socket)=>{
    console.log('new connection', socket.id);
    
});//empezamos a escuchar cuando se conecta
