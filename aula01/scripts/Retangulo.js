class Retangulo {
    //É um método que é executado quando uma instância é criada
    constructor(largura,altura,cor){
        console.log("O retangulo foi instanciado");
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }
    getArea(){
        return this.largura*this.altura;
    }
    toString(){
        return `Largura: ${this.largura}\nAltura: ${this.altura}\nArea: ${this.getArea()}`;
    }

}