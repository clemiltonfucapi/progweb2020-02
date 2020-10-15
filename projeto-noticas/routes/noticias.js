/* ROUTER */
module.exports = function(app){
    app.get('/',function(req,res){
        /* Passando para o controller */
        app.controllers.noticias.index(app,req,res);
    })

    
}