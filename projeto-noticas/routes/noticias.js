/* ROUTER */
module.exports = function(app){
    app.get('/',function(req,res){
        /* Passando para o controller */
        app.controllers.noticias.index(app,req,res);
    })

    app.get('/adicionar-noticia',(req,res) => {
        app.controllers.noticias.addRender(app,req,res);
    })

    app.post('/adicionar-noticia',(req,res) => {
        app.controllers.noticias.add(app,req,res);
    })
}