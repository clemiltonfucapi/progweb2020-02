

/*

var cor = prompt('Escreva uma cor')
/*
if(cor ==="verde"){

	console.log("vá em frente")

}else if(cor==="amarelo"){
	
	console.log("atenção") 

}else if(cor === "vermelho"){
	console.log("pare")
}

switch(cor){
	case "verde":
		console.log("siga")
		break
	case "amarelo":
		console.log("atenção")
		break
	case "vermelho":
		console.log("pare")
		break
	default:
		console.log("inválido")
}
*/

var numero = prompt('Digite um numero')
for( let i=1 ; i<=10 ; i++ ){
	console.log( numero + " X " + i + "=" + i*numero )
}
// TEMPLATE STRING
numero=4
for(let i = 1; i<=10 ; i++){
	console.log(` ${i} X ${numero} = ${i*numero} `)
}

