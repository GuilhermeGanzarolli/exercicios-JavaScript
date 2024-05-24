const conjunto = [5,50,10,98,21]
let posicao = 0;

function print(elemento){
    console.log(elemento)
}

function exibirConjunto() {
    let numero = conjunto[posicao];
    posicao++;
    return numero;
}

function exibirNome(params) {
    console.log(params);
}


function somar(n1,n2) {
    const resultado = n1+n2;
    return  resultado;
}

module.exports = {
    exibirNome,
    somar,
    print,
    exibirConjunto
};