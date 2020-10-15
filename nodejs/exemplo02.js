/* Importando o módulo */
const express = require('express');
const path = require('path')
/* Instanciando um objeto express */
let app =   express()
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/'));


app.get('/',(req,res) => {
    res.render('views/index')
});
app.get('/users',(req,res) => {
    user = { 
        id: 1,
        nome: "Raquel",
        email: "solano.raquel20@gmail.com"
     }
     res.json(user);
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})

app.get('/clientes',(req,res) => {
    res.render("views/clientes");
});

app.get('/produtos',(req,res) => {
    res.render("views/produtos");
    
})