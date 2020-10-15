
/* Controller */ 
/* Tratar a pagina inicial  / */

function index(app,req,res){

    /*  ACESSANDO OS DADOS */
    let noticiasData = new app.models.Noticia();
    noticiasData.getNoticias(
        function(result){

            res.render("noticias/index", {noticias: result})
        }      
    );
}

module.exports = {
    index: index
}