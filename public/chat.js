console.log('chat codigo');
//io() //solo se conecta en el mismo dominio.. si usamos otro se le debe poner el parametro io('http//asdasdad')
const socket = io()

//DOM ELEMENTS
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
    socket.emit('chat:mensaje',{//emitir mensajes al servidor
      message: message.value,
      username: username.value  
    });
    console.log(username.value, message.value);
});

message.addEventListener('keypress', function() {
    console.log(username.value);
    
    socket.emit('chat:typing', username.value)
});

socket.on('chat:mensaje', function(data){
    console.log(data);
    actions.innerHTML = '';
    output.innerHTML += `<p>
    <strong>${data.username}</strong> :${data.message}
    </p>` 
});

socket.on('chat:typing', function(data){
    actions.innerHTML = `<p><em>${data} is typing</em></p>`
});