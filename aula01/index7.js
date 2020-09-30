let dataElement = document.querySelector('#data')
let date = new Date();
dataElement.innerHTML = date.toLocaleDateString('pt-BR');

var horaElement = document.querySelector('#hora')
setInterval(function(){
    horaElement.innerHTML = new Date().toLocaleTimeString('pt-BR')
},1000)

horaElement.innerHTML = date.toLocaleTimeString('pt-BR')
