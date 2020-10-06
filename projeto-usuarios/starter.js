let form = document.querySelector("#form-usuarios");
//Selecionando elementos que tem o atributo name
let inputs = document.querySelectorAll("#form-usuarios  [name]")
let user = {};
//console.log(inputs)
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    //pegando o nome
    //user[  inputs[0].name ] = inputs[0].value;
    //pegando o e-mail
    //user[ inputs[5].name ] = inputs[5].value;
    inputs.forEach( (input) => {
        if(input.type =="radio" && !input.checked)
            return;
        user[input.name] = input.value;
    } )
    console.log(user);
    //comandos
});   