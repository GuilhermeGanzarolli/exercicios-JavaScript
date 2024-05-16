class Carros{
    marca;
    cor;
    kmPorLitro;
    constructor(marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor= cor;
        this.kmPorLitro = kmPorLitro;
    }

    consumo(kms,valorCombustivel) {
        const litrosNecessarios = kms/this.kmPorLitro
        const gastos = valorCombustivel*litrosNecessarios;
        console.log(`Você vai precisar de ${litrosNecessarios} litros de gasolina para realizar esta viagem de ${kms} KMs`)
        return gastos;
    }
}

const carro1 = new Carros("VW", "Prata", 8);
console.log(carro1.consumo(120,5));

