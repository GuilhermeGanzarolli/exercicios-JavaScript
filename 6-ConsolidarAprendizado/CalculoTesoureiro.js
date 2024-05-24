const {salarioBruto} = require('./funcoes-auxiliares')

salario = salarioBruto(2000,250)
let taxa = 0

if (salario>0 && salario<=1100) {
    taxa = salario*0.05
    salario = salario - taxa
}else if(salario>1100 && salario<= 2500){
    taxa = salario*0.10
    salario = salario - taxa
}else if(salario>2500){
    taxa = salario*0.15
    salario = salario - taxa
}

console.log(`Seu salário BRUTO é -> ${salarioBruto(2000,250)}`)
console.log(`Seu salário LIQUIDO é -> ${salario}`)
console.log(`Taxa paga é -> ${taxa}`)