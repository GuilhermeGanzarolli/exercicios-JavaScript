const lista = [8,12,3,74,41,98,7,20,92,13,1];


let numerosPares = [];
let numerosImpares = [];


for(let i = 0; i<lista.length;i++){
    if(lista[i]%2==0){
        numerosPares.push(lista[i]);
    }else{
        numerosImpares.push(lista[i]);
    }
}
console.log(`Lista -> ${lista}`)
console.log(`Tamanho da lista -> ${lista.length}`)
console.log('========= Números PARES =========');
for (let i = 0; i < numerosPares.length; i++) {
    console.log(numerosPares[i]);
}

console.log('========= Números ÍMPARES =========');
for (let i = 0; i < numerosImpares.length; i++) {
    console.log(numerosImpares[i]);
}