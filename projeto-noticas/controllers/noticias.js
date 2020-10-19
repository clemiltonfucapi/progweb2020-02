
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
/* Renderizar tela de cadastro noticia*/
function addRender(app,req,res){

    res.render("noticias/add")
}

/* Adicionar noticia na base de dados */

function add(app,req,res){
    let noticia = new app.models.Noticia(req.body);
    noticia.addNoticia( ()=>{
        res.redirect('/');
    });
}
module.exports = {
    index: index,
    addRender: addRender,
    add: add
}