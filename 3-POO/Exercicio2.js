class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura= altura;
    }

    falarImc(){
        const imc = this.peso/(this.altura*this.altura)
        console.log(`O IMC de ${this.nome} é ${imc.toFixed(2)}`)
    }
}

const guilherme = new Pessoa('Guilherme', 70, 1.75);
guilherme.falarImc();