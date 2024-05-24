const { print, calcularMedia } = require('./funcoes-auxiliares');


media = calcularMedia(5,3,4,5);

if (media<5) {
    print(`O aluno foi reprovado com média -> ${media}`)
}else if(media>=5 && media<7){
    print(`O aluno está de recuperação com média -> ${media}`)
}else{
    print(`O aluno foi aprovado com média -> ${media}`)
}