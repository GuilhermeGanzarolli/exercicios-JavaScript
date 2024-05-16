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
        return imc.toFixed(2);
    }

    verificarImc(){
        const imc = this.falarImc();
        if(imc <= 18.5){
            return 'Abaixo do peso';
        }else if(imc > 18.5 && imc <= 25){
            return 'Saudável';
        }else if(imc > 25 && imc <= 30){
            return 'A cima do peso';
        }else if(imc > 30 && imc <= 40){
            return 'Obeso';
        }else{
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.falarImc());

const guilherme = new Pessoa('Guilherme', 76, 1.83);
console.log(`Imc de ${guilherme.nome} é ${guilherme.falarImc()}`);
console.log(`${guilherme.nome} é classificado como ${guilherme.verificarImc()}`);