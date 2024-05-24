const {    exibirNome, somar, print, exibirConjunto} = require('./funcoes-auxiliares')

exibirNome('Guilherme')

console.log(somar(5,7))


let numeros = [];
numeros.push(exibirConjunto())
numeros.push(exibirConjunto())
numeros.push(exibirConjunto())
numeros.push(exibirConjunto())
numeros.push(exibirConjunto())

print(numeros)

let maiorNumero = 0
for(let i = 0; i<numeros.length;i++){
    if(i==0){
        maiorNumero = numeros[i]
    }else{
        if(maiorNumero<numeros[i]){
            maiorNumero=numeros[i]
        }
    }
}

print(`O maior número é ${maiorNumero}`)