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
    console.log(username.value, message.value);
    
});