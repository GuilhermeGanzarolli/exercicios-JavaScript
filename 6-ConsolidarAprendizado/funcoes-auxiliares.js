const listaNumeros = [3,4,10,8,12,13,18,2]
let i1 = 0

function receber(){
    const valor = listaNumeros[i1]
    i1++
    return valor;
}

function verificarPrimeiro(params) {
    if(params==0){
        return true;
    }
}

function verificarPar(params) {
    if(params%2==0){
        return true
    }else{
        return false
    }
}


function print(texto){
    console.log(texto);
}


function calcularMedia(n1,n2,n3,n4) {
    media = (n1+n2+n3+n4)/4
    return media
}


function salarioBruto(n1,n2) {
    const total = n1+n2;
    return total
}




module.exports = {print, calcularMedia, receber, verificarPrimeiro, verificarPar, salarioBruto}