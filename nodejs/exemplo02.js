/* Importando o módulo */
const express = require('express');
/* Instanciando um objeto express */
let app =   express()

app.get('/',(req,res) => {
    res.end("<h1> Página inicial </h1>");
});

app.get('/users',(req,res) => {
    user = { 
        id: 1,
        nome: "Clemilton",
        email: "clemilton.ufam@gmail.com"
     }
     res.json(user);
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})



