const prompt = require('prompt-sync')()

let horas = Number(prompt('Digite suas horas: '))

let pontos
let dinheiroGanho 


if (horas >= 10) {
    pontos = 2 * horas
}else if( horas > 10 && horas <= 20){
    pontos = 5 * horas

}else if (horas > 20){
    pontos = 10 * horas
}else{
    console.log('Digite um valor valido');
    
}
dinheiroGanho = pontos * 0.5

console.log(`voce ganhou R$ ${dinheiroGanho.toFixed(2)} com ${pontos} pontos` );
