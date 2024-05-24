const { receber, verificarPrimeiro, verificarPar } = require('./funcoes-auxiliares');

maiorPar = 0;
menorImpar = 0;



for(let i = 0; i<8; i++){
    let numero = receber()
    if (verificarPrimeiro(i)) {
        if (verificarPar(numero)) {
            maiorPar = numero
        }else{
            menorImpar= numero
        }
    }else{
        if(verificarPar(numero)){
            if(numero>maiorPar){
                maiorPar=numero
            }
        }else{
            if(numero<menorImpar){
                menorImpar=numero
            }
        }
    }
}


console.log(`O maior número par é ${maiorPar} e o menor número impar é ${menorImpar}`)