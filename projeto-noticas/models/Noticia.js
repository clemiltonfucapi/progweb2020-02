var fs = require('fs')

function Noticia(name){
    this.name = name;
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

module.exports = ()=>{
    return Noticia;
}






