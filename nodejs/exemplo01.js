/* --- Exemplo 01 *----*/

/* Importando o módulo http  */
const http = require('http');

/* Criando um servidor  
- req :Contém informações sobre a requisição(Ex: URL, método, dados)
- res : Resposta do servidor ao cliente
*/
let server = http.createServer((req,res) =>{
    console.log('URL: ', req.url)
    console.log('METHOD: ',req.method);
    //res.end('ok')
    switch (req.url){
        case '/':
            res.end('<h1>Pagina inicial</h1>')
        case '/users':

            let user;
            // user = BANCO DE DADOS
            user = { 
                id: 1,
                nome: "Clemilton",
                email: "clemilton.ufam@gmail.com"
             } 
            res.end(   JSON.stringify( user));
    }


});


/* Colocar o servidor para "escutar"(listen) as 
requisições
- 3000: Porta do servidor
- 127.0.0.1: IP de loopback - localhost
*/
server.listen(3000,'127.0.0.1', () => {

    console.log("Servidor rodando");
})


