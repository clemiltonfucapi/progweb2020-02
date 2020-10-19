var fs = require('fs')

function Noticia(body){
    if(body){
        this.titulo = body.titulo;
        this.noticia = body.noticia
    }
}

Noticia.prototype.getNoticias = (callback)=>{
    fs.readFile('./data/noticias.json', (err, result)=>{

        if(!err){
            /* CONVERSÃO DE STRING -> JSON(OBJETO) */ 
            var obj = JSON.parse(result);

            /* Chamando o callback-> res.render(obj.noticias) */
            callback(obj.noticias);
        }else{
            //TRATAMENTO DE ERROS
        }

    });
}
Noticia.prototype.addNoticia = function(callback){
    var noticia = {
        titulo: this.titulo,
        noticia: this.noticia
    };
    fs.readFile('./data/noticias.json',(err,result)=>{

        if(!err){
            var obj = JSON.parse(result)
            obj.noticias.push(noticia);
            console.log(obj)
            let str = JSON.stringify(obj);
            fs.writeFile('./data/noticias.json', str, (err) =>{
                if(err)
                    throw err
                console.log("Arquivo atualizado!")
                callback();
            })
            
        }
    })

}

module.exports = ()=>{
    return Noticia;
}






